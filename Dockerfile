# Use an official Ubuntu as the base image
FROM ubuntu:20.04

# Set the environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
    wget \
    jq \
    unzip \
    openjdk-11-jdk \
    bash \
    tar \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install HTMLQ
RUN wget -q -O /usr/local/bin/htmlq https://github.com/mgdm/htmlq/releases/latest/download/htmlq-x86_64-linux && \
    chmod +x /usr/local/bin/htmlq

# Install APKEditor
RUN wget -q -O /usr/local/bin/APKEditor.jar https://github.com/REAndroid/APKEditor/releases/download/V1.4.1/APKEditor-1.4.1.jar

# Set the working directory to /workspace
WORKDIR /workspace

# Define the entrypoint to run the script
ENTRYPOINT ["/bin/bash"]
