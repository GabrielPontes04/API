# Obtener Perfiles 

Método para consultar los perfiles que tiene asignado un usuario. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.ObtenerPerfiles | RBTPG407 | Global 

> Ejemplo de invocación al método Obtener Perfiles: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.ObtenerPerfiles> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>2062732190F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
      </bts:BTUsuarios.ObtenerPerfiles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerPerfiles=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AC", 
		"Usuario": "BANTOTAL", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "2062732190F955E77534D3E0" 
	}, 
	"usuario": "INSTALADOR" 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTUsuarios.ObtenerPerfilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>2062732190F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPerfiles> 
            <sBTPerfilBT> 
               <Perfil>COMERCIAL</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>INSTALADOR</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>MFINSTALL</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>PRECIOS</perfil> 
               <FechaAlta>2001-02-22</fechaAlta> 
               <FechaVencimiento>2035-03-03</fechaVencimiento> 
            </sBTPerfilBT> 
         </sdtPerfiles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.ObtenerPerfiles</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>17:29:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6995</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.ObtenerPerfilesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "2062732190F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtPerfiles": { 
        "sBTPerfilBT": [ 
            { 
                "Perfil": "COMERCIAL", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "INSTALADOR", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "MFINSTALL", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "PRECIOS", 
                "FechaAlta": "2001-02-22", 
                "FechaVencimiento": "2035-03-03" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTUsuarios.ObtenerPerfiles", 
        "Fecha": "2019-11-19", 
        "Hora": "17:31:08", 
        "Requerimiento": "", 
        "Numero": 6997, 
        "Estado": "OK" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Usuario a consultar. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPerfiles | sBTPerfilBT | Perfiles del usuario. 

Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Perfil | String | Identificación de perfil Bantotal. 
FechaAlta | Date | Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil. 
FechaVencimiento | Date | Fecha de vencimiento del perfil para el usuario. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió Usuario. 
40001 | No existe el usuario ingresado. 

 
