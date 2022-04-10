FROM public.ecr.aws/lambda/python:3.8 as lambda-base

COPY requirements.txt /tmp/

# Install Python dependencies for function
RUN pip install --upgrade pip -q
RUN pip install -r /tmp/requirements.txt -q

# Final image with code and dependencies
FROM lambda-base 

# # Copy function code
COPY app.py /var/task/
