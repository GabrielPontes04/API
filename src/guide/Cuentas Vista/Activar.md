# Activar 

Método para activar una cuenta vista. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.Activar | RBTPG442 | Global 

> Ejemplo de invocación al método Activar: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.Activar> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>2772EB28927EAC58EF950EBA</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:operacionUId>1215</bts:operacionUId> 
         <bts:fechaFencimientoEstado></bts:fechaFencimientoEstado> 
         <bts:observaciones>Cuenta Activa</bts:observaciones> 
      </bts:BTCuentasVista.Activar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?Activar' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 1, 
          "Device": "GP", 
          "Token": "2772EB28927EAC58EF950EBA", 
          "Usuario": "INSTALADOR", 
          "Canal": "BTDIGITAL" 
        }, 
        "operacionUId": 1215, 
        "fechaFencimientoEstado": "", 
        "observaciones": "Cuenta Activa" 
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
      <BTCuentasVista.ActivarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Token>2772EB28927EAC58EF950EBA</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-12-01</Fecha> 
            <Servicio>BTCuentasVista.CambiarEstado</Servicio> 
            <Hora>14:44:52</Hora> 
            <Numero>225689</Numero> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTCuentasVista.ActivarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Token": "2772EB28927EAC58EF950EBA", 
          "Canal": "BTDIGITAL", 
          "Device": "GP", 
          "Usuario": "INSTALADOR", 
          "Requerimiento": 1 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Estado": "OK", 
          "Canal": "BTDIGITAL", 
          "Fecha": "2022-12-01", 
          "Servicio": "BTCuentasVista.CambiarEstado", 
          "Hora": "14:44:52", 
          "Numero": 225689, 
          "Requerimiento": 1 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
nuevoEstado | Short | Nuevo estado [Hidden: Valor fijo 0]. 
fechaVencimientoEstado | Date | Fecha de vencimiento del estado. 
observaciones | String | Observaciones. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de Operacion.. 
30002 | No se recuperó la Operacion para el Identificador: [Número de Identificador]. 

 
