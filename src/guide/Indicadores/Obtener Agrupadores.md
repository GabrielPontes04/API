# Obtener Agrupadores 

Método para obtener los agrupadores de indicadores ingresados en el sistema. 

Nombre publicación|Programa|Global/País 
---------|-----------|----------- 
BTIndicadores.ObtenerAgrupadores|RBTPG700|Global       

> Ejemplo de invocación al servicio de Obtener Agrupadores: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerAgrupadores> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerAgrupadores> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerAgrupadores' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
      "Device": 1, 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1" 
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
      <BTIndicadores.ObtenerAgrupadoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtAgrupadores> 
            <sBTAgrupador> 
               <descripcion>Condiciones Generales</descripcion> 
               <codigo>100</codigo> 
            </sBTAgrupador> 
            <sBTAgrupador> 
               <descripcion>Cajas y Sucursales</descripcion> 
               <codigo>200</codigo> 
            </sBTAgrupador> 
            <sBTAgrupador> 
               <descripcion>Contabilidad</descripcion> 
               <codigo>300</codigo> 
            </sBTAgrupador> 
         </sdtAgrupadores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11988</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerAgrupadores</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>13:56:18</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerAgrupadoresResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": 1, 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?", 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7" 
   }, 
   "sdtAgrupadores": { 
      "sBTAgrupador": [ 
      { 
         "descripcion": "Condiciones Generales", 
         "codigo": 100 
      }, 
      { 
         "descripcion": "Cajas y Sucursales", 
         "codigo": 200 
      }, 
      { 
         "descripcion": "Contabilidad", 
         "codigo": 300 
      } 
      ] 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11988, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerAgrupadores", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:56:18" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre|Tipo|Comentarios 
---------|-----------|----------- 
sdtAgrupadores | sBTAgrupador | Listado de Agrupadores. 

Los campos del tipo de dato estructurado sBTAgrupador son los siguientes: 

Campo|Tipo|Comentarios 
---------|-----------|----------- 
codigo | Int | Identificador del agrupador. 
descripcion | String | Descripción del agrupador. 

### Errores 

Código|Descripción 
---------|----------- 
40001 | No existen Agrupadores. 


 
