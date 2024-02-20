# Crear 

Método para crear un usuario. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.Crear | RBTPG120 | Global 

> Ejemplo de invocación al método Crear: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Crear> 
		<bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtUsuario> 
            <bts:Nombre>Natalia Parrilla</bts:nombre> 
            <bts:Usuario>PARRILLAN</bts:usuario> 
            <bts:Email>nparrilla@prueba.com</bts:email> 
            <bts:Telefono>26012777</bts:Telefono> 
            <bts:CantidadSesionesAbiertas>0</bts:cantidadSesionesAbiertas> 
            <bts:EspaciosTrabajo>0</bts:espaciosTrabajo> 
            <bts:ProgramaInicial>HPRUEBA</bts:programaInicial> 
            <bts:Nivel>9</bts:nivel> 
            <bts:Sucursal>1</bts:sucursal> 
            <bts:Cajero>S</bts:cajero> 
            <bts:NumeroCaja>1</bts:numeroCaja> 
         </bts:sdtUsuario> 
      </bts:BTUsuarios.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Crear' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "sdtUsuario": { 
      "Nombre": "Carlos Dutra", 
      "Usuario": "DUTRAC", 
      "Email": "cdutra@prueba.com", 
      "Telefono": "26012777", 
      "CantidadSesionesAbiertas": 0, 
      "EspaciosTrabajo": 0, 
      "ProgramaInicial": "HPRUEBA", 
      "Nivel": 9, 
      "Sucursal": 1, 
      "Cajero": "S", 
      "NumeroCaja": 1 
   } 
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
      <BTUsuarios.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>89</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.Crear</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>16:13:28</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.CrearResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "96", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.Crear", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-04", 
        "Hora": "16:18:56", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtUsuario | sBTUsuarioBT | Datos de usuario Bantotal. 
modo | String | [Hidden: Valor fijo 'INS' para este método]. 

Los campos del tipo de dato estructurado sBTUsuarioBT son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Usuario | String | Identificador del usuario. 
Nombre | String | Nombre del usuario. 
Email | String | Email de usuario. 
Telefono | String | Teléfono del usuario.  
Sucursal | Int | Identificador de sucursal. 
ProgramaInicial | String | Nombre de programa incial que se invoca al acceder a Bantotal. 
EspaciosTrabajo | Int | Cantidad máxima de espacios de trabajos que puede tener abierta el usuario (0 - Para indicar que no tiene limites). 
CantidadSesionesAbiertas | Short | Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal. 
Cajero | String | Indica si el usuario es cajero (S/N). 
NumeroCaja | Int | Número de caja que utiliza el cajero. 
Nivel | Short | Nivel del usuario. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar Usuario. 
30002 | El Usuario ya existe. 
30004 | Debe ingresar Nombre. 
30005 | Debe ingresar Email. 
30006 | Debe ingresar Nro de Caja. 
30007 | Valor incorrecto para cantidad de sesiones abiertas. 
30008 | Valor incorrecto para Nivel. 
30009 | Debe ingresar Programa Inicial. 
30010 | El Programa Inicial no existe. 
30011 | Debe ingresar Sucursal. 
30012 | La Sucursal no existe. 
40012 | Numero de Cajero ya asignado. 

 
