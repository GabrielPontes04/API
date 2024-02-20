# Obtener Identificador Único 

Método para devolver el identificador único de un cliente, dado su identificador de cuenta en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerIdentificadorUnico | RBTPG001 | Global 

> Ejemplo de invocación al método Obtener Identificador Unico: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerIdentificadorUnico> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:cuentaBT>40</bts:cuentaBT> 
      </bts:BTClientes.ObtenerIdentificadorUnico> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerIdentificadorUnico=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fa21f66a-6048-8719-0d77-9750abc1c92e' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "cuentaBT": 40 
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
      <BTClientes.ObtenerIdentificadorUnicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <clienteUId>81</clienteUId> 
         <tipoDocumento>CI</tipoDocumento> 
         <numeroDocumento>46600107</numeroDocumento> 
         <nombre>PEREZ SOSA JUAN</nombre> 
         <ejecutivo/> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>851</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerIdentificadorUnico</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>02:34:33</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerIdentificadorUnicoResponse> 
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
    "clienteUId": "81", 
    "tipoDocumento": "CI", 
    "numeroDocumento": "46600107", 
    "nombre": "PEREZ SOSA JUAN", 
    "ejecutivo": "", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "852", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerIdentificadorUnico", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "02:35:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
cuentaBT | Int | Cuenta Bantotal. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
tipoDocumento | String | Tipo de documento. 
numeroDocumento | String | Número de documento. 
nombre | String | Nombre. 
ejecutivo | String | Ejecutivo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió la Cuenta BT. 

 
