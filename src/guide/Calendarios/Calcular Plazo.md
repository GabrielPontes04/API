# Calcular Plazo 

Método que calcula el plazo entre una fecha de inicio y fecha de fin ingresadas. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCalendarios.CalcularPlazo | RBTPG338 | Global 

> Ejemplo de invocación al método Calcular Plazo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.CalcularPlazo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>573607534CD285A89A23FBEE</bts:Token> 
            <bts:Device>N</bts:Device> 
         </bts:Btinreq> 
         <bts:sucursalId></bts:sucursalId> 
         <bts:fechaInicio>2020-02-15</bts:fechaInicio> 
         <bts:fechaFin>2020-03-12</bts:fechaFin> 
         <bts:tipoVencimiento>A</bts:tipoVencimiento> 
      </bts:BTCalendarios.CalcularPlazo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?CalcularPlazo' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "sucursalId": "", 
    "fechaInicio": "2020-02-15", 
    "fechaFin": "2020-03-12", 
    "tipoVencimiento": "A" 
} 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCalendarios.CalcularPlazoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>573607534CD285A89A23FBEE</Token> 
            <Device>N</Device> 
         </Btinreq> 
         <plazo>27</plazo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.CalcularPlazo</Servicio> 
            <Fecha>2021-04-07</Fecha> 
            <Hora>17:52:43</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8156</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.CalcularPlazoResponse> 
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
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "plazo": "27", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.CalcularPlazo", 
      "Fecha": "2021-04-07", 
      "Hora": "17:52:43", 
      "Requerimiento": "1", 
      "Numero": "8156", 
      "Estado": "OK" 
    } 
  } 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sucursalId  | Int | Identificador de sucursal. 
fechaInicio | Date | Fecha de inicio del plazo. 
fechaFin    | Date | Fecha de fin del plazo. 
tipoDia     | Byte | [Hidden, valor fijo 1 para este método]. 
tipoVencimiento  | String | Tipo de ajuste al vencimiento ('A': Hábil anterior, 'P': Hábil posterior, 'N': No ajusta). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
plazo | Int | Plazo. 

### Errores 

No aplica 

 
