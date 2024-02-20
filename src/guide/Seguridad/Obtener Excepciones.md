# Obtener Excepciones 

Método para obtener un listado de las excepciones por usuario. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTSeguridad.ObtenerExcepciones | RBTPG086 | Global 

> Ejemplo de invocación al método Obtener Excepciones: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTSeguridad.ObtenerExcepciones> 
         <bts:Btinreq> 
            <bts:Device>ES</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>BANTOTAL</bts:usuario> 
      </bts:BTSeguridad.ObtenerExcepciones> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?ObtenerExcepciones=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: e024d37c-0177-05ca-8f99-25dbfae4abbb' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "usuario": "BANTOTAL" 
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
      <BTSeguridad.ObtenerExcepcionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>ES</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dac8c7fdec4A8B5C60A82434</Token> 
         </Btinreq> 
         <excepciones> 
            <sBTExcepcionns:sBTExcepcion xmlns:sBTExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
               <identificador>1853</identificador> 
               <descripcion>Autorización T.Cbio./Arbitraje</descripcion> 
               <usuario>INSTALADOR</usuario> 
               <nombreUsuario>INSTALADOR</nombreUsuario> 
               <movimientoUId>0</movimientoUId> 
               <descripcionMovimiento>Compra USD Caja</descripcionMovimiento> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <ligada>N</ligada> 
            </sBTExcepcionns:sBTExcepcion> 
         </excepciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>891</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTSeguridad.ObtenerExcepciones</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2017-12-20</Fecha> 
            <Hora>16:40:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTSeguridad.ObtenerExcepcionesResponse> 
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
    "excepciones": { 
        "sBTExcepcion": [ 
            { 
                "nombreUsuario": "INSTALADOR", 
                "descripcion": "Autorización T.Cbio./Arbitraje", 
                "identificador": "1854", 
                "usuario": "INSTALADOR", 
                "ligada": "N", 
                "movimientoUId": "0", 
                "nombreSucursal": "Casa Matriz", 
                "descripcionMovimiento": "Compra USD Caja" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "956", 
        "Estado": "OK", 
        "Servicio": "BTSeguridad.ObtenerExcepciones", 
        "Fecha": "2017-12-22", 
        "Requerimiento": "", 
        "Hora": "10:54:51", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Usuario. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
excepciones | sBTExcepcion | Listado de excepciones. 

Los campos del tipo de dato estructurado sBTExcepcion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador de excepción. 
descripcion | String | Descripción de la excepción. 
usuario | String | Usuario. 
nombreUsuario | String | Nombre del usuario. 
movimientoUId | Long | Identificador único de movimiento. 
descripcionMovimiento | String | Descripción del movimiento. 
nombreSucursal | String | Nombre de la sucursal. 
ligada | String | Ligada (S/N). 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el usuario. 

 
