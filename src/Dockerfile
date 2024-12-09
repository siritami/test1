FROM --platform=linux/amd64 ubuntu:latest

# Install required dependencies
RUN apt-get update && apt-get install -y \
    bash \
    curl \
    git \
    openjdk-11-jdk \
    unzip \
    zip \
    && apt-get clean

# Set the working directory
WORKDIR /src

# Copy all files into the container
COPY . .

RUN chmod +x /src/build/Revanced-Extended.sh

# Set the entrypoint to bash
ENTRYPOINT ["/bin/bash"]
