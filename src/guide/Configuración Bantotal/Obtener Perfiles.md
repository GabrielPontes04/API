# Obtener Perfiles 

Método para obtener un listado de los perfiles registrados en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerPerfiles | RBTPG126 | Global 

> Ejemplo de invocación al método Obtener Perfiles: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerPerfiles> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>33cb514e804A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerPerfiles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPerfiles' \ 
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
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTConfiguracionBantotal.ObtenerPerfilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>33cb514e804A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPerfiles> 
            <sBTPerfil> 
               <identificador>BACKOFFICE</identificador> 
               <descripcion>Perfil del Back Office</descripcion> 
            </sBTPerfil> 
            <sBTPerfil> 
               <identificador>CAJERO</identificador> 
               <descripcion>Perfil de Cajero</descripcion> 
            </sBTPerfil> 
            <sBTPerfil> 
               <identificador>CAPTACCONF</identificador> 
               <descripcion>Perfil de Confirmación de Captacion</descripcion> 
            </sBTPerfil> 
            <sBTPerfil> 
               <identificador>CAPTACION</identificador> 
               <descripcion>Perfil de Captaciones operativo</descripcion> 
            </sBTPerfil> 
         </sdtPerfiles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>131</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerPerfiles</Servicio> 
            <Requerimiento>3</Requerimiento> 
            <Fecha>2018-05-07</Fecha> 
            <Hora>11:59:29</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerPerfilesResponse> 
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
   "sdtPerfiles": { 
      "sBTPerfil": [ 
         { 
         "descripcion": "Perfil del Back Office", 
         "identificador": "BACKOFFICE" 
         }, 
         { 
         "descripcion": "Perfil de Cajero", 
         "identificador": "CAJERO" 
         }, 
         { 
         "descripcion": "Perfil de Confirmación de Captacion", 
         "identificador": "CAPTACCONF" 
         }, 
         { 
         "descripcion": "Perfil de Captaciones operativo", 
         "identificador": "CAPTACION" 
         }, 
      ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "132", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerPerfiles", 
      "Requerimiento": "2", 
      "Fecha": "2018-05-07", 
      "Hora": "12:03:04", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPerfiles | sBTPerfil | Listado de perfiles. 

Los campos del tipo de dato estructurado sBTPerfil son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | String | Identificador del perfil. 
descripcion | String | Descripcion del perfil. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No existen Perfiles ingresadas en el sistema. 

 
