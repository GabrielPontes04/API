# Obtener Tipos de Telefono (Disponible únicamente para V2R3) 

Método para obtener un listado de los tipos de teléfono ingresados en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerTiposDeTelefono | RBTPG217 | Global 

> Ejemplo de invocación al método Obtener Tipos De Telefono: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposDeTelefono> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2e2434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposDeTelefono> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeTelefono' \ 
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
      <BTConfiguracionBantotal.ObtenerTiposDeTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2e2434</Token> 
         </Btinreq> 
         <sdtTiposTelefono> 
            <sBTTipoTelefono> 
               <descripcion>Telefono Fijo</descripcion> 
               <identificador>1</identificador> 
            </sBTTipoTelefono> 
            <sBTTipoTelefono> 
               <descripcion>Celular</descripcion> 
               <identificador>2</identificador> 
            </sBTTipoTelefono> 
            <sBTTipoTelefono> 
               <descripcion>Telefono de trabajo</descripcion> 
               <identificador>3</identificador> 
            </sBTTipoTelefono> 
         </sdtTiposTelefono> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8514</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeTelefono</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:43:07</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerTiposDeTelefonoResponse> 
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
	"sdtTiposTelefono": { 
		"sBTTipoTelefono": [ 
			{ 
         "descripcion": "Telefono Fijo", 
         "identificador": "1" 
			}, 
			{ 
         "descripcion": "Celular", 
         "identificador": "2" 
			}, 
			{ 
         "descripcion": "Telefono de trabajo", 
         "identificador": "3" 
			} 
		] 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 8396, 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposDeTelefono", 
      "Requerimiento": "1", 
      "Fecha": "2019-05-07", 
      "Hora": "15:54:44", 
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
sdtTiposTelefono | sBTTipoTelefono | Listado de tipos de teléfono. 

Los campos del tipo de dato estructurado sBTTipoTelefono son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion	| String	| Descripción de tipo de teléfono. 
identificador | Long | Identificador de tipo de teléfono. 

### Errores 

Código | Descripción 
--------- | ----------- 
30011 | No existen tipos de telefono ingresados en el sistema. 

 
