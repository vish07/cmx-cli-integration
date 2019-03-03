# checkmarx-cli-integration
Checkmarx cli integration

## Requirements
 
 Python 3.6+ with supported pip
 ReactJs & ChartJs latest version

 ## Checkmarx cli

 ```
 Download the checkmarx cli plugin from https://www.checkmarx.com/plugins and make sure you unzip @ ./CxConsolePlugin-8.80.2/ i.e. in the current working directory

```


 ### Python packages
- Please refere the requirements.txt for the list of required python packages for this application.


 ### Creating environment
 - Create virtual environment
```
python -m venv venv
```

- Activate the virtual environment
```
source venv/bin/activate
```

### Install require python package
- Change the folder to git repo and run below command

 ```
 pip3 install -r requirements.txt
 ```

### To run the utility that will get the source code from repo & push to checkmarx server to scan & eventually download report
- run below command after you have activated the virtual environment
 ```
 python util.py
 ```

### To start the api server
- run below command after you have activated the virtual environment
 ```
 python api.py
 ```
- this will start the api server locally @ http://127.0.0.1:5000/
- the report api can be access using: http://127.0.0.1:5000/report

### To access the dashboard to view the report
- Just open the index.html in any browser after you have started the api server successfully
- The dashboard makes use of ReactJs & ChartJs.
