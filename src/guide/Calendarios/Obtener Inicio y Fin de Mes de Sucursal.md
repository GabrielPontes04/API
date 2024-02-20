# Obtener Inicio y Fin de Mes de Sucursal 

Método que devuelve la primer y última fecha hábil para el mes indicado, para la sucursal recibida por parámetro. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCalendario.ObtenerInicioYFinMesSucursal | RBTPG334 | Global 

> Ejemplo de invocación al método Obtener Inicio y Fin de Mes de Sucursal: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.ObtenerInicioYFinMesSucursal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>172681201999865B3A2E76CF</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:mesConsulta>11</bts:mesConsulta> 
         <bts:anioConsulta>2020</bts:anioConsulta> 
         <bts:sucursalId>1</bts:sucursalId> 
      </bts:BTCalendarios.ObtenerInicioYFinMesSucursal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 

curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerInicioYFinMesSucursal' \ 
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
    "mesConsulta": "11", 
    "anioConsulta": "2020", 
    "sucursalId": "1" 
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
      <BTCalendarios.ObtenerInicioYFinMesSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>Instalador</Usuario> 
            <Token>172681201999865B3A2E76CF</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <fechaHabilInicio>2020-11-02</fechaHabilInicio> 
         <fechaHabilFin>2020-11-30</fechaHabilFin> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.ObtenerInicioYFinMesSucursal</Servicio> 
            <Fecha>2021-03-24</Fecha> 
            <Hora>09:12:15</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8090</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.ObtenerInicioYFinMesSucursalResponse> 
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
    "fechaHabilInicio": "2020-11-02", 
    "fechaHabilFin": "2020-11-30", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.ObtenerInicioYFinMesSucursal", 
      "Fecha": "2021-03-24", 
      "Hora": "09:12:15", 
      "Requerimiento": "1", 
      "Numero": "8090", 
      "Estado": "OK" 
    } 
  } 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
mesConsulta | Short | Mes de consulta. 
anioConsulta | Int | Año de consulta. 
sucursalId | Int | Identificador de sucursal. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaHabilInicio | Date | Primera fecha hábil del mes. 
fechaHabilFin | Date | Última fecha hábil del mes. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar mes a consultar. 
30002 | Debe ingresar año a consultar. 
30003 | Debe ingresar identificador de sucursal. 
40001 | La Sucursal no existe. 

 
