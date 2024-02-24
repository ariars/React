# 환경 변수 설정
$env:SCOOP='C:\Scoop'
[System.Environment]::SetEnvironmentVariable('Scoop', $env:SCOOP, 'User')

# 실행 규칙 변경
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Scoop 설치
iwr -useb get.scoop.sh | iex

# git, aria2 추가 설치
scoop install git aria2

# node.js 설치
scoop install nodejs-lts
node -v

# VS Code 설치
scoop bucket add extras
scoop install vscode

# VS Code 마우스 우클릭 실행
cd C:\scoop\apps\vscode\current
./install-context.reg

# touch 설치
scoop install touch

# 크롬 설치
scoop install googlechrome
chrome