# Inhabilitar 

Método para inhabilitar una cuenta que se encuentra habilitada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.Inhabilitar | RBTPG498 | Institucional 

> Ejemplo de invocación al método Inhabilitar: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.Inhabilitar> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>47D750A861C4243EDE981344</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10009</bts:clienteUId> 
         <bts:motivo>3</bts:motivo> 
         <bts:justificacion>Prueba</bts:justificacion> 
      </bts:BTClientes.Inhabilitar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Inhabilitar \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Device": "GP", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
   "clienteUId": 10009, 
   "motivo": 3, 
   "justificacion": "Prueba"  
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
      <BTClientes.InhabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>47D750A861C4243EDE981344</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTClientes.Inhabilitar</Servicio> 
            <Fecha>2022-11-17</Fecha> 
            <Hora>11:46:15</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>463</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTClientes.InhabilitarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
' 
{ 
    "Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "47D750A861C4243EDE981344" 
	}, 
	"Erroresnegocio": { 
        "BTErrorNegocio": [] 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTClientes.Inhabilitar", 
	  "Requerimiento": "1", 
	  "Fecha": "2022-11-17", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "11:46:15" 
	} 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
motivo | Short | Código de motivo de inhabilitación. 
justificacion | String | Justificación de la inhabilitación. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar identificador de cliente. 
30002 | Debe ingresar motivo de inhabilitación. 
30003 | Debe ingresar justificación. 
40001 | No se puede inhabilitar la cuenta porque está cerrada. 
40002 | La cuenta ya se encuentra inhabilitada. 
40003 | La cuenta ingresada no existe. 
40004 | No se puede cambiar estado porque la cuenta tiene saldos. 
40005 | El motivo ya se encuentra ingresado. 
40006 | El motivo ingresado no existe. 

 
