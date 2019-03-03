import os
os.chdir('C:\\Users\\\Shruti\\Desktop')
os.system("git clone http://vish07:<pass>@github.com/vish07/dvwa.git")
os.system("C:\\Users\\Shruti\\Desktop\\work\\chekmarx-cli-integration\\CxConsolePlugin-8.80.2\\runCxConsole.sh scan -Projectname CxServer/SP/EMEA/vis.gor7_gmail.com/test3_php -CxServer 'https://cxprivatecloud.checkmarx.net/cxwebclient' -cxuser 'vis.gor7@gmail.com' -cxpassword '<pass>' -locationtype folder -locationpath ~\\Desktop\\dvwa\\ -reportxml report.xml")
