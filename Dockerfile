FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y \
    wget \
    curl \
    unzip \
    bash \
    jq \
    git \
    tar && \
    rm -rf /var/lib/apt/lists/*

# Set up working directory
WORKDIR /workspace

# Copy the repository into the container
COPY . .

# Install additional tools (e.g., HTMLQ, APKEditor)
RUN wget -q -O ./htmlq.tar.gz https://github.com/mgdm/htmlq/releases/latest/download/htmlq-x86_64-linux.tar.gz && \
    tar -xf "./htmlq.tar.gz" -C "./" && \
    wget -q -O ./APKEditor.jar https://github.com/REAndroid/APKEditor/releases/download/V1.4.1/APKEditor-1.4.1.jar

# Set environment variables
ENV HTMLQ="./htmlq"
ENV APKEditor="./APKEditor.jar"

# Set up the entrypoint (optional)
ENTRYPOINT ["bash"]
