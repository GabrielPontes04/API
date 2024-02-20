# Buscar Cliente 

Método para buscar una persona y sus cuentas cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.BuscarCliente | RBTPG411 | Global 

> Ejemplo de invocación al método Buscar Cliente: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.BuscarCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:paisDocumento>320</bts:paisDocumento> 
         <bts:tipoDocumento>1</bts:tipoDocumento> 
         <bts:numeroDocumento>2131248150408</bts:numeroDocumento> 
      </bts:BTMicrofinanzas.BuscarCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?BuscarCliente \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
        "paisDocumento": "320", 
        "tipoDocumento": "1", 
        "numeroDocumento": "2131248150408" 
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
      <BTMicrofinanzas.BuscarClienteResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtCuentas> 
            <Cuenta> 
               <clienteUId>2</clienteUId> 
               <titularidad> 
                  <identificador>1</identificador> 
                  <descripcion>Titular</descripcion> 
               </titularidad> 
               <representativo>S</representativo> 
            </Cuenta> 
         </sdtCuentas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.BuscarCliente</Servicio> 
            <Fecha>2019-09-11</Fecha> 
            <Hora>11:32:30</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>128</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.BuscarClienteResponse> 
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
        "sdtCuentas": { 
          "Cuenta": { 
            "clienteUId": "2", 
            "titularidad": { 
              "identificador": "1", 
              "descripcion": "Titular" 
            }, 
            "representativo": "S" 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.BuscarCliente", 
          "Fecha": "2019-09-11", 
          "Hora": "11:32:30", 
          "Requerimiento": "95", 
          "Numero": "128", 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDocumentoId | Short | Identificador del país de origen del documento. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
numeroDocumento | String | Número de documento de la persona. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentas | sBTCuentasCliente | Listado de cuentas de la persona. 

Los campos del tipo de dato estructurado sBTCuentaCliente son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cuenta. 
titularidad | sBTTipoIntegrante | Tipo de integrante. 
representativo | String | Indica si es titular representativo (S/N). 

Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador del integrante. 
descripcion | String | Descripcion del integrante. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del País de documento. 
30002 | No se recibió el identificador del Tipo de documento. 
30003 | No se recibió el número de documento. 
30004 | No existe registro de la Persona. 
30005 | No se pudo obtener identificador único de la persona. 
30006 | No se pudo obtener identificador único de la cuenta. 

 
