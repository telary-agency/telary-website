---
title: AI has changed how I work
slug: ai-has-changed-how-i-work
date_published: 2025-02-26T12:04:12.000Z
date_updated: 2025-02-26T12:08:02.000Z
layout: post
---

I was initially skeptical about AI’s impact on programming and data engineering. However, after experimenting with it, I realized that it already plays a significant role in improving workflows, and I hope it will continue to evolve.

To better illustrate the problems I solve, let me first introduce my company, Telary. It’s a consulting firm specializing in data-centric challenges for clients. Most of the time, I work alone or collaborate with an internal team member from the client’s side. A key challenge in my work is that the technology stacks I deploy are tailored precisely to each client’s needs.

My recent projects have included:

- Migrating OnPrem to AWS cloud
- Deploying some dataplatforms with Databricks, Snowflake
- Deploying a data stack on AWS, GCP or OnPrem
- Search data architecture around Elasticsearch and AppSearch
- Building python & django data oriented apps

The scope being broad I try to push as much as possible for Python or SQL programming, Terraform, Ansible, Github Action and Docker.

So here is some of the last prompts I used and the solution finally implemented.

# Conversion use cases

## Bash to Ansible conversion

This is a straightforward automation use case. I often write Bash scripts when setting up my VMs while searching for the right configurations, but I prefer to provide my clients with Ansible scripts. I ask for Bash to Ansible conversion simply using the following prompts

> Can you convert this bash script to an ansible script ?

    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc
    
    # Add the repository to Apt sources:
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

docker installation script

The result isn’t perfect, but it provides a solid starting point for an Ansible playbook. Some refinements and iterations are necessary to ensure a fully functional version, but the initial generated code was:

    ---
    - name: Add Docker's official GPG key and repository
      hosts: all
      become: yes
      tasks:
        - name: Update apt package index
          apt:
            update_cache: yes
    
        - name: Install required packages
          apt:
            name:
              - ca-certificates
              - curl
            state: present
    
        - name: Create the /etc/apt/keyrings directory
          file:
            path: /etc/apt/keyrings
            state: directory
            mode: '0755'
    
        - name: Download Docker's official GPG key
          get_url:
            url: https://download.docker.com/linux/ubuntu/gpg
            dest: /etc/apt/keyrings/docker.asc
            mode: '0644'
    
        - name: Add Docker repository to apt sources list
          lineinfile:
            path: /etc/apt/sources.list.d/docker.list
            create: yes
            mode: '0644'
            line: "deb [arch={{ ansible_architecture }} signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu {{ ansible_distribution_release }} stable"
            state: present
    
        - name: Update apt package index after adding Docker repository
          apt:
            update_cache: yes

## Javascript to SQL conversion

A few days ago I had to convert some javascript ingestion pipeline to SQL, it was some complex processing so I asked

> Can you convert this Javascript code to BigQuery SQL : <insert code here>

The output wasn’t satisfactory, so I considered using a JavaScript UDF in BigQuery. However, I wasn’t keen on the idea of hosting a JS library for this purpose, so I asked for a rewrite.

> Can you rewrite the following code in plain javascript without libs ?
> <insert code here>
> For example I expect this <input> to give this <output>

# Data ingestion/conversion scripts

In my work, I frequently build simple scripts to transfer data between systems. This is uninteresting code, often simple but with all kind of problems especially around authentication, bulk processing and so on.

> Can you give me some python code to convert a json array like this sample, to an OPML file

    {
      "took" : 6,
      "timed_out" : false,
      "_shards" : {
        "total" : 1,
        "successful" : 1,
        "skipped" : 0,
        "failed" : 0
      },
      "hits" : {
        "total" : {
          "value" : 117,
          "relation" : "eq"
        },
        "max_score" : 4.321128,
        "hits" : [
          {
            "_index" : "feeduser",
            "_type" : "_doc",
            "_id" : "PE9ZNnIB90DRFFmguoeF",
            "_score" : 4.321128,
            "_source" : {
              "feedUrl" : "https://mywebsite.com/feed/",
              "feedName" : "website name",
              "category" : "DEFAULT_VALUE",
              "email" : "DefoLrxw47EQ+nfD4MQQQuWcEE+bUNrf2C3WKFmyuxZE="
            }
          },

json output from elasticsearch

The result works right away—just copy and paste. This saves a lot of time. Since it worked well, I decided to explore further with this prompt.

> Can you make it work as a Django view, on GET it should display a button to upload an OPML file or its content, and on POST it should parse the content. Save this using following model.

    class ImportFeed(models.Model):
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
        xml_url = models.URLField(unique=True, max_length=2000)
        html_url = models.URLField(unique=True, max_length=2000)
        title = models.TextField()
        text = models.TextField()
        group_name = models.TextField()
        type = models.CharField(max_length=100)
        import_date = models.DateTimeField(auto_now_add=True)
        converted_on = models.DateTimeField(blank=True)

model code given to the LLM

    def parse_and_save_opml(opml_content, user):
        # Convert the content to bytes if it's a string with an encoding declaration
        if isinstance(opml_content, str):
            opml_content = opml_content.encode('utf-8')
    
        tree = etree.fromstring(opml_content)
    
        # Ensure this is an OPML file
        if tree.tag != 'opml':
            raise ValueError('Invalid OPML format')
    
        for outline in tree.xpath("//outline[@type='rss']"):
            xml_url = outline.get("xmlUrl")
            html_url = outline.get("htmlUrl", "")
            title = outline.get("title", outline.get("text", "Untitled Feed"))
            text = outline.get("text", "")
            group_name = outline.getparent().get("title") or outline.getparent().get("text", "opml import")
            feed_type = outline.get("type", "rss")
    
            # Save data to the ImportFeed model
            ImportFeed.objects.create(
                user=user,
                xml_url=xml_url,
                html_url=html_url,
                title=title,
                text=text,
                group_name=group_name,
                type=feed_type,
                converted_on=None
            )

part of the code using the model provided in the prompt

I used this for other conversion formats, JSON, CSV, Firebase, Google Cloud Storage and it was always quite successful.

# Build a draft of a feature

I wanted to build an api route to stream an audio conversion done by Mistral AI. But I had absolutely never worked with audio files and lacked the keys words and vocable to google efficiently and know what documentation to read.

> I currently have this code to generate a .wav file and output it via Django. How could I return the file as a StreamingHttpResponse ?

    def tts_file(voice, text):
        wav_file = wave.open("output.wav", "w")
        audio = voice.synthesize(text, wav_file)
        return wav_file
    
    def tts_article(request):
        model = "/home/constant/en_US-lessac-medium.onnx"
        voice = PiperVoice.load(model)
        text = """
        The Waveform Audio File Format (WAV or WAVE) is a widely used audio format, 
        originally developed by Microsoft and IBM and based on the RIFF wrapper format.
        The usual audio encoding in a .wav file is LPCM, considered an 'uncompressed' 
        encoding. Because of large file sizes, WAV is not well-suited for distributing
        audio such as songs or podcasts. WAV is used in MS-Windows to store sounds 
        used in applications. It is also used as an archival format for first-generation
        (master) files, often with a metadata chunk as specified in 
        the Broadcast Wave (BWF) standard.
        """
        wav_file = tts_file(voice=voice, text=text)
        #response = HttpResponse()
        f = open("output.wav", "rb")
        response = FileResponse(f)
        response["Content-Type"] = "audio/vnd.wav"
        return response

code given to the prompt

> I found this code but can't convert the stream to an StreamingHttpResponse

    def tts_stream(voice, text):
        # Setup a sounddevice OutputStream with appropriate parameters
        # The sample rate and channels should match the properties of the PCM data
        stream = sd.OutputStream(samplerate=voice.config.sample_rate, channels=1, dtype='int16')
        stream.start()
        for audio_bytes in voice.synthesize_stream_raw(text):
            int_data = np.frombuffer(audio_bytes, dtype=np.int16)
            stream.write(int_data)

code given to the prompt

It gave me a first solution that didn't work so I had to do a little back and forth because sometimes the file was directly deleted, sometime it was streamed but the format didn't work all the kind of problems you can expect with streaming audio files. 

It finally gave me a horrendous piece of code that absolutely amazed me by its complexity for something that probably exists in thousands of products. But it worked.

    import struct
    from django.http import StreamingHttpResponse
    
    def wav_header(sample_rate, num_channels, bits_per_sample):
        """Generate a WAV header for PCM data(streaming)."""
        byte_rate = sample_rate * num_channels * bits_per_sample // 8
        block_align = num_channels * bits_per_sample // 8
        wav_header = struct.pack('<4sI4s4sIHHIIHH4sI',
                                 b'RIFF',              # ChunkID
                                 0xFFFFFFFF,           # ChunkSize
                                 b'WAVE',              # Format
                                 b'fmt ',              # Subchunk1ID
                                 16,                   # Subchunk1Size
                                 1,                    # AudioFormat (1 = PCM)
                                 num_channels,         # NumChannels
                                 sample_rate,          # SampleRate
                                 byte_rate,            # ByteRate
                                 block_align,          # BlockAlign
                                 bits_per_sample,      # BitsPerSample
                                 b'data',              # Subchunk2ID
                                 0xFFFFFFFF)           # Subchunk2Size
        return wav_header
    

code given by the LLM

I could do the test I wanted and investigated on the best audio format to use and wav wasn't one of them so I only had to use this prompt.

> Ok, it works, without changing too much the code can you provide a solution with more web oriented formats

And this was the biggest game changer instead of going from 0 to 1 if I had to develop the feature on my own I started with something, obviously a bad solution but I had keywords and concepts to search for and could easily improve the code instead of starting from nothing. 
In about an hour, I had a working feature, and within minutes, an improved version of the code running. Honestly, without LLMs, I would have struggled at every step and spent significantly more time.

# Debug and investigation

A prompt I often use and with often good results is:

> Here is my SQL query <insert sql query> it doesn't work with the following error message, <error message> (or the output isn't what I expect) can you fix it ?

It works remarkably well, especially on Friday afternoons when staying sharp becomes a challenge.

# Conclusion

I believe AI isn’t yet capable of solving large, complex problems on its own. However, a significant part of our job involves breaking down complex challenges into smaller, manageable tasks—and this is where AI has the most impact. Previously, I would have divided the workload and asked a junior team member to research and figure out how to accomplish X. Sometimes, they would return with a functional and well-structured solution, but often, it required multiple iterations to refine the scope or provide more precise instructions. AI is successfully replacing this back-and-forth process, helping me save both time and money.

But this raises an important question—if we stop hiring juniors, how will we get future seniors?
