 
## Agregar Perfil
 
Método para asociar un perfil a un usuario. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.AgregarPerfil | RBTPG122 | Global 
 
> Ejemplo de invocación al método Agregar Perfil: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.AgregarPerfil> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
         <bts:sdtPerfil> 
            <bts:Perfil>COMEX</bts:perfil> 
            <bts:FechaAlta>2018-12-01</bts:fechaAlta> 
            <bts:FechaVencimiento>2020-01-01</bts:fechaVencimiento> 
         </bts:sdtPerfil> 
      </bts:BTUsuarios.AgregarPerfil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?AgregarPerfil' \ 
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
   "Usuario": "INSTALADOR", 
   "sdtPerfil": { 
      "Perfil": "COMEX", 
      "FechaAlta": "2018-12-01", 
      "FechaVencimiento": "2020-01-01" 
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
      <BTUsuarios.AgregarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>76</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.AgregarPerfil</Servicio> 
            <Fecha>2018-05-04</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>15:44:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.AgregarPerfilResponse> 
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
        "Numero": "80", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.AgregarPerfil", 
        "Fecha": "2018-05-04", 
        "Requerimiento": "1", 
        "Hora": "15:54:29", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador del usuario. 
sdtPerfil | sBTPerfilBT | Datos del perfil. 
 
Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes: 
 
Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Perfil | String | Identificación de perfil Bantotal. 
FechaAlta | Date | Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil. 
FechaVencimiento | Date | Fecha de vencimiento del perfil para el usuario. 
 
### Datos de salida 
 
No aplica. 
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar Usuario. 
30002 | No existe Usuario. 
30003 | Debe ingresar Perfil. 
30004 | No existe Perfil. 
30005 | Debe ingresar Fecha de Alta. 
30006 | Fecha de Alta debe ser posterior a Fecha de Apertura. 
30007 | Debe ingresar Fecha de Vencimiento. 
30008 | Fecha de Vencimiento debe ser posterior a Fecha de Apertura. 
 
## Crear
 
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
 
## Eliminar Perfil
 
Método para eliminar un perfil asociado a un usuario. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.EliminarPerfil | RBTPG123 | Global 
 
> Ejemplo de invocación al método Eliminar Perfil: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.EliminarPerfil> 
		<bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
         <bts:perfil>COMEX</bts:perfil> 
      </bts:BTUsuarios.EliminarPerfil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?EliminarPerfil' \ 
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
   "usuario": "INSTALADOR", 
   "perfil": "COMEX" 
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
      <BTUsuarios.EliminarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>81</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.EliminarPerfil</Servicio> 
            <Fecha>2018-05-04</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>15:55:50</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.EliminarPerfilResponse> 
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
        "Numero": "82", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.EliminarPerfil", 
        "Fecha": "2018-05-04", 
        "Requerimiento": "1", 
        "Hora": "15:57:30", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
 
### Datos de entrada 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador de usuario. 
perfil | String | Identificador de perfil. 
 
### Datos de salida 
 
No aplica. 
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar Usuario. 
30002 | No existe Usuario. 
30003 | Debe ingresar Perfil. 
30004 | No existe Perfil. 
 
## Eliminar Usuario
 
Método para eliminar un usuario. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.EliminarUsuario | RBTPG390 | Global 
 
> Ejemplo de invocación al servicio de Eliminar Usuario: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.EliminarUsuario> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>20130357454A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
      </bts:BTUsuarios.EliminarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?EliminarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
   "usuario": "GPONTES", 
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
      <BTUsuarios.EliminarUsuarioResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>20130357454A8B5C60A82434</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.EliminarUsuario</Servicio> 
            <Fecha>2022-05-17</Fecha> 
            <Hora>15:29:02</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8843</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.EliminarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.EliminarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
 
### Datos de entrada 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador del usuario.  
 
### Datos de salida 
 
No aplica. 
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar usuario. 
30002 | No existe el usuario ingresado. 
30003 | No es posible eliminar el usuario. Existen datos relacionados de Perfil/Usuario. 
30004 | El Usuario no existe. (Tabla FST746) 
30005 | La Empresa para el Usuario no existe. 
 
## Habilitar Usuario
 
Método para habilitar un usuario que se encuentra inhabilitado. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.HabilitarUsuario | RBTPG394 | Global 
 
> Ejemplo de invocación al servicio de Habilitar Usuario: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.HabilitarUsuario> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>bc8b678bc44A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
         <bts:fechaDesde>2022-01-01</bts:fechaDesde> 
      </bts:BTUsuarios.HabilitarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?HabilitarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
   "Usuario": "GPONTES", 
   "fechaDesde": "2022-01-01" 
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
      <BTUsuarios.HabilitarUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bc8b678bc44A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>839</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.HabilitarUsuario</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2022-05-12</Fecha> 
            <Hora>15:35:54</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.HabilitarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.HabilitarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
 
### Datos de entrada 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador del usuario.  
fechaDesde | Date | Fecha desde la que se encuentra inhabilitado.  
 
### Datos de salida 
 
No aplica. 
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar usuario a habilitar. 
30002 | Debe ingresar fecha desde. 
40003 | No se puede eliminar. Registro no existe. 
 
## Inhabilitar Usuario
 
Método para inhabilitar un usuario. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.InhabilitarUsuario | RBTPG393 | Global 
 
> Ejemplo de invocación al servicio de Inhabilitar Usuario: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.InhabilitarUsuario> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>bc8b678bc44A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
         <bts:fechaDesde>2022-01-01</bts:fechaDesde> 
         <bts:fechaHasta>2022-06-01</bts:fechaHasta> 
      </bts:BTUsuarios.InhabilitarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?InhabilitarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
   "Usuario": "GPONTES", 
   "fechaDesde": "2022-01-01", 
   "fechaHasta": "2022-06-01" 
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
      <BTUsuarios.InhabilitarUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bc8b678bc44A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>838</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.InhabilitarUsuario</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2022-05-12</Fecha> 
            <Hora>15:35:43</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.InhabilitarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.InhabilitarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
 
### Datos de entrada 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador del usuario.  
fechaDesde | Date | Fecha desde la que se quiere inhabilitar. 
fechaHasta | Date | Fecha hasta la que se quiere inhabilitar.  
 
### Datos de salida 
 
No aplica. 
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar usuario a inhabilitar. 
30002 | Debe ingresar fecha desde. 
30003 | Debe ingresar fecha hasta. 
40002 | Registro ya existe. 
 
## Modificar
 
Método para modificar un usuario. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.Modificar | RBTPG120 | Global 
 
> Ejemplo de invocación al método Modificar: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Modificar> 
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
            <bts:Cajero>N</bts:cajero> 
            <bts:NumeroCaja>0</bts:numeroCaja> 
         </bts:sdtUsuario> 
      </bts:BTUsuarios.Modificar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Modificar' \ 
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
		"Cajero": "N", 
		"NumeroCaja": 0 
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
      <BTUsuarios.ModificarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>98</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.Modificar</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>16:50:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.ModificarResponse> 
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
        "Numero": "99", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.Modificar", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-04", 
        "Hora": "16:51:22", 
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
modo | String | [Hidden: Valor fijo 'UPD' para este método]. 
 
Los campos del tipo de dato estructurado sBTUsuarioBT son los siguientes: 
 
Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Usuario | String | Identificador del usuario. 
Nombre | String | Nombre del usuario. 
Email | String | Email del usuario. 
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
30000 | Parámetro modo incorrecto. 
30001 | Debe ingresar Usuario. 
30003 | No existe Usuario. 
30004 | Debe ingresar Nombre. 
30005 | Debe ingresar Email. 
30006 | Debe ingresar Nro de Caja. 
30007 | Valor incorrecto para cantidad de sesiones abiertas. 
30008 | Valor incorrecto para Nivel. 
30009 | Debe ingresar Programa Inicial. 
30010 | El Programa Inicial no existe. 
30011 | Debe ingresar Sucursal. 
30012 | La Sucursal no existe. 
40011 | La Empresa para el Usuario no existe. 
40012 | Numero de Cajero ya asignado. 
 
## Obtener
 
Método para obtener los datos de un usuario. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.Obtener | RBTPG406 | Global 
 
> Ejemplo de invocación al método Obtener: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Obtener> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>2062732190F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
      </bts:BTUsuarios.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Obtener=' \ 
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
      <BTUsuarios.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>2062732190F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtDatosUsuario> 
            <usuario>INSTALADOR</usuario> 
            <nombre>INSTALADOR</nombre> 
            <email>moralesa@dlya.com.uy</email> 
            <telefono>26012777</telefono> 
            <sucursal>Sucursal Beta</sucursal> 
            <programaInicial>MINICIO</programaInicial> 
            <espaciosDeTrabajo>0</espaciosDeTrabajo> 
            <cantidadSesionesAbiertas>9</cantidadSesionesAbiertas> 
            <cajero>S</cajero> 
            <numeroCaja>400</numeroCaja> 
            <nivel>9</nivel> 
            <perfiles> 
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
            </perfiles> 
         </sdtDatosUsuario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.Obtener</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>17:19:56</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6991</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.ObtenerResponse> 
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
    "sdtDatosUsuario": { 
        "usuario": "INSTALADOR", 
        "nombre": "INSTALADOR", 
        "email": "moralesa@dlya.com.uy", 
        "telefono": "26012777", 
        "sucursal": "Sucursal Beta", 
        "programaInicial": "MINICIO", 
        "espaciosDeTrabajo": 0, 
        "cantidadSesionesAbiertas": 9, 
        "cajero": "S", 
        "numeroCaja": 400, 
        "nivel": 9, 
        "perfiles": { 
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
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTUsuarios.Obtener", 
        "Fecha": "2019-11-19", 
        "Hora": "17:21:59", 
        "Requerimiento": "", 
        "Numero": 6992, 
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
sdtDatosUsuario | sBTDatosUsuario | Datos del usuario. 
 
Los campos del tipo de dato estructurado sBTDatosUsuario son los siguientes: 
 
Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador del usuario. 
nombre | String | Nombre del usuario. 
email | String | Email del usuario. 
telefono | String | Teléfono del usuario. 
sucursal | String | Sucursal donde se encuentra el usuario. 
programaInicial | String | Nombre de programa incial que se invoca al acceder a Bantotal. 
espaciosDeTrabajo | Int | Cantidad máxima de espacios de trabajos que puede tener abierta el usuario. 
cantidadSesionesAbiertas | Short | Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal. 
cajero | String | Es cajero? (S/N). 
numeroCaja | Int | Número de caja del usuario. 
nivel | short | Nivel del usuario. 
perfiles | sBTPerfilBT | Perfiles asociados al usuario. 
 
Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes: 
 
Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Perfil | String | Identificador de perfil Bantotal. 
FechaAlta | Date | Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil. 
FechaVencimiento | Date | Fecha de vencimiento del perfil para el usuario. 
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | No se recibió Usuario. 
40001 | No existe el usuario ingresado. 
 
## Obtener Perfiles
 
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
 
## Obtener Usuarios
 
Método para obtener la lista de usuarios ingresados en el sistema. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.ObtenerUsuarios | RBTPG391 | Global 
 
> Ejemplo de invocación al servicio de Obtener Usuarios: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.ObtenerUsuarios> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>20130357454A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
      </bts:BTUsuarios.ObtenerUsuarios> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerUsuarios' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
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
      <BTPersonas.ObtenerUsuariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>c2cfd09eff4A8B5C60A82434</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtUsuarios> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>GERENTE</usuario> 
               <nombre>GERENTE</nombre> 
               <ultimoAvisoActividad>2018-03-21, 12:51:10</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1 - BTV2R3 Uruguay</empresa> 
               <usuario>BANTOTAL</usuario> 
               <nombre>BANTOTAL</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:46:09</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>COLOCACION</usuario> 
               <nombre>COLOCACION</nombre> 
               <ultimoAvisoActividad>2018-02-26, 17:03:16</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>CAJERO</usuario> 
               <nombre>CAJERO</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:40:24</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>OPERADOR</usuario> 
               <nombre>OPERADOR</nombre> 
               <ultimoAvisoActividad>2001-01-01, 15:29:13</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
         </sdtUsuarios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16576</Numero> 
            <Hora>12:36:58</Hora> 
            <Fecha>2022-05-26</Fecha> 
            <Servicio>BTPersonas.ObtenerUsuarios</Servicio> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerUsuariosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtUsuarios": { 
        "SdtsBTDetalleUsuario": [ 
        { 
            "empresa": "1", 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "ultimoAvisoActividad": "2018-03-21, 12:51:10" 
        }, 
        { 
            "empresa": "1 - BTV2R3 Uruguay", 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "ultimoAvisoActividad": "2022-05-26, 13:46:09" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "COLOCACION", 
            "nombre": "COLOCACION", 
            "ultimoAvisoActividad": "2018-02-26, 17:03:16" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "ultimoAvisoActividad": "2022-05-26, 13:40:24" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "OPERADOR", 
            "nombre": "OPERADOR", 
            "ultimoAvisoActividad": "2001-01-01, 15:29:13" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerUsuarios", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
 
### Datos de entrada 
 
No aplica. 
 
### Datos de salida 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtUsuarios | sBTDetalleUsuario | Listado de usuarios. 
 
Los campos del tipo de dato estructurado sBTDetalleUsuario son los siguientes: 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresa | String | Nombre de la empresa. 
usuario | String | Código del usuario. 
nombre | String | Nombre del usuario. 
ultimoAvisoActividad | String | Último aviso de actividad del usuario.  
 
### Errores 
 
No aplica. 
 
## Obtener Usuarios Para Perfil
 
Método para obtener la lista de usuarios que tiene asociados determinado perfil. 
 
Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.ObtenerUsuariosParaPerfil | RBTPG392 | Global 
 
> Ejemplo de invocación al servicio de Obtener Usuarios Para Perfil: 
 
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.ObtenerUsuariosParaPerfil> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>20130357454A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>CAJERO</bts:usuario> 
      </bts:BTUsuarios.ObtenerUsuariosParaPerfil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerUsuariosParaPerfil' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
    "perfil": "CAJERO", 
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
      <BTPersonas.ObtenerUsuariosParaPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>c2cfd09eff4A8B5C60A82434</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtUsuarios> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>GERENTE</usuario> 
               <nombre>GERENTE</nombre> 
               <ultimoAvisoActividad>2018-03-21, 12:51:10</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1 - BTV2R3 Uruguay</empresa> 
               <usuario>BANTOTAL</usuario> 
               <nombre>BANTOTAL</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:46:09</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>COLOCACION</usuario> 
               <nombre>COLOCACION</nombre> 
               <ultimoAvisoActividad>2018-02-26, 17:03:16</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>CAJERO</usuario> 
               <nombre>CAJERO</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:40:24</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>OPERADOR</usuario> 
               <nombre>OPERADOR</nombre> 
               <ultimoAvisoActividad>2001-01-01, 15:29:13</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
         </sdtUsuarios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16576</Numero> 
            <Hora>12:36:58</Hora> 
            <Fecha>2022-05-26</Fecha> 
            <Servicio>BTPersonas.ObtenerUsuariosParaPerfil</Servicio> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerUsuariosParaPerfilResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtUsuarios": { 
        "SdtsBTDetalleUsuario": [ 
        { 
            "empresa": "1", 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "ultimoAvisoActividad": "2018-03-21, 12:51:10" 
        }, 
        { 
            "empresa": "1 - BTV2R3 Uruguay", 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "ultimoAvisoActividad": "2022-05-26, 13:46:09" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "COLOCACION", 
            "nombre": "COLOCACION", 
            "ultimoAvisoActividad": "2018-02-26, 17:03:16" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "ultimoAvisoActividad": "2022-05-26, 13:40:24" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "OPERADOR", 
            "nombre": "OPERADOR", 
            "ultimoAvisoActividad": "2001-01-01, 15:29:13" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerUsuariosParaPerfil", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
 
### Datos de entrada 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
perfil | String | Peril de usuario.  
 
### Datos de salida 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtUsuarios | sBTDetalleUsuario | Listado de usuarios. 
 
Los campos del tipo de dato estructurado sBTDetalleUsuario son los siguientes: 
 
Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresa | String | Nombre de la empresa. 
usuario | String | Código del usuario. 
nombre | String | Nombre del usuario. 
ultimoAvisoActividad | String | Último aviso de actividad del usuario.  
 
### Errores 
 
Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar perfil. 
40001 | No existe el perfil ingresado. 
 
ECHO está desactivado.
