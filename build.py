import subprocess
import os
import shutil

docker_tag = 'wedding-server:v0.0.1-a'

def get_relative_directory(folder_name: str) -> str:
    top_directory = os.path.dirname(os.path.realpath(__file__))
    return os.path.join(top_directory, folder_name)

def ensure_directory_exists(folder: str):
    def impl():
        full_path = get_relative_directory(folder)
        if not os.path.exists(full_path):
            os.makedirs(full_path)
    return impl

def npm_install(folder: str):
    def impl():
        npm_install_folder = get_relative_directory(folder)
        subprocess.call(['npm', 'install'], cwd=npm_install_folder, shell=True)
    return impl

def npm_build(folder: str):
    def impl():
        npm_build_folder = get_relative_directory(folder)
        subprocess.call(['npm', 'run', 'build', '--production'], cwd=npm_build_folder, shell=True)
    return impl

def copy_build_to_server(source_folder: str, target_folder: str):
    def impl():
        source = get_relative_directory(source_folder)
        target = get_relative_directory(target_folder)
        print(f'Copying content folder from {source} to {target}')

        shutil.rmtree(target_folder, ignore_errors=True)
        shutil.copytree(source_folder, target_folder)
    return impl

def build_docker(folder: str):
    def impl():
        server_folder = get_relative_directory(folder)
        tag = os.environ.get('DOCKER_BUILD_TAG', docker_tag)
        subprocess.call(['docker', 'build', '.', '-t', tag], cwd=server_folder, shell=True)
    return impl

steps = [
    ('Ensure Wedding Page Custom Content Folder Exists', ensure_directory_exists('./wedding-page/src/content')),
    ('NPM Install for server', npm_install('server')),
    ('NPM Install for Login Page', npm_install('login')),
    ('NPM Install for Wedding Page', npm_install('wedding-page')),
    ('NPM Build for server', npm_build('server')),
    ('NPM Build for Login Page', npm_build('login')),
    ('NPM Build for Wedding Page', npm_build('wedding-page')),
    ('Copy content folder for Login Page to Server', copy_build_to_server('./login/build', './server/login-build')),
    ('Copy content folder for Wedding Page to Server', copy_build_to_server('./wedding-page/build', './server/content-build')),
    ('Build Docker image for Server', build_docker('server')),
]

for name, step in steps:
    print('=' * 3 + f' {name} ' + '=' * 3)
    step()


