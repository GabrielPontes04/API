# Obtener Fecha Hábil Anterior 

Método que devuelve la fecha hábil anterior a la fecha ingresada. Si no se recibe identificador de calendario, devuelve para el calendario de la sucursal central. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCalendario.ObtenerFechaHabilAnterior | RBTPG331 | Global 

> Ejemplo de invocación al método Obtener Fecha Hábil Anterior: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.ObtenerFechaHabilAnterior> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>172681201999865B3A2E76CF</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:calendarioId>1</bts:calendarioId> 
         <bts:fecha>2021-03-27</bts:fecha> 
      </bts:BTCalendarios.ObtenerFechaHabilAnterior> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 

curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerFechaHabilAnterior' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "Instalador", 
      "Token": "172681201999865B3A2E76CF", 
      "Device": "1" 
    }, 
	"calendarioId": "1", 
    "fecha": "2021-03-27" 
  }, 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCalendarios.ObtenerFechaHabilAnteriorResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>Instalador</Usuario> 
            <Token>172681201999865B3A2E76CF</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <fechaHabil>2021-03-26</fechaHabil> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.ObtenerFechaHabilAnterior</Servicio> 
            <Fecha>2021-03-24</Fecha> 
            <Hora>09:14:10</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8094</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.ObtenerFechaHabilAnteriorResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "Instalador", 
      "Token": "172681201999865B3A2E76CF", 
      "Device": "1" 
    }, 
    "fechaHabil": "2021-03-26", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.ObtenerFechaHabilAnterior", 
      "Fecha": "2021-03-24", 
      "Hora": "09:14:10", 
      "Requerimiento": "1", 
      "Numero": "8094", 
      "Estado": "OK" 
    } 
  } 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
calendarioId | Short | Identificador de calendario. 
fecha | Date | Fecha de consulta. 
sentido  | String | [Hidden, valor fijo 'D' para este método]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaHabil | Date | Fecha hábil anterior. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar fecha a consultar. 

 
