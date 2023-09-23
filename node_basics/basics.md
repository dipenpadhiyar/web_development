```
NODE BASIC
```


Globals = no window object !!!

__dirname  - path to current directory

__filename - file name

require - function to use modules (CommonJS)

modules - into about current module (file)

process - info about env where the program is being exexuted

```
Modules in node::::
    we can share data usign module object in node
    module.exports = {variables, varaibles}
    we can use this data using request method from file which we are export.

    data.js
    ```
    const name_detail = "dipen"
    const detail = "age is 23"
    const gender = "male"
    module.exports = {name_detail, detail}
    ```

    use.js
    ```
    const data = require('./name')
    console.log(data.name_detail)
    ```
```

