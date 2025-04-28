FROM python:3.9-slim

# 设置环境变量，强制 Python 使用 UTF-8 编码
ENV PYTHONIOENCODING=utf-8

# 创建工作目录
WORKDIR /app

# 复制文件到容器中
COPY . /app

# 安装依赖
RUN pip3 install -r requirements.txt

# 暴露端口
EXPOSE 5000

# 启动 Flask 应用
CMD ["python", "app.py"]