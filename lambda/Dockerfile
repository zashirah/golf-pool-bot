# Install Browser, OS dependencies and Python modules
FROM public.ecr.aws/lambda/python:3.8 as lambda-base

COPY requirements.txt /tmp/
COPY install-browsers.sh /tmp/

# Install dependencies
RUN yum install xz atk cups-libs gtk3 libXcomposite alsa-lib tar \
    libXcursor libXdamage libXext libXi libXrandr libXScrnSaver \
    libXtst pango at-spi2-atk libXt xorg-x11-server-Xvfb \
    xorg-x11-xauth dbus-glib dbus-glib-devel unzip bzip2 -y -q

# Install Browsers
RUN /usr/bin/bash /tmp/install-browsers.sh

# Install Python dependencies for function
RUN pip install --upgrade pip -q
RUN pip install -r /tmp/requirements.txt -q

# Remove not needed packages
RUN yum remove xz tar unzip bzip2 -y

# Final image with code and dependencies
FROM lambda-base 

# Copy function code
COPY app.py /var/task/

