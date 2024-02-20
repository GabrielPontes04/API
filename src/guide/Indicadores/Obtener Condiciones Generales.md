# Obtener Condiciones Generales 

Método para obtener las condiciones generales ingresadas en el sistema. 

Nombre publicación|Programa|Global/País 
---------|-----------|----------- 
BTIndicadores.ObtenerCondicionesGenerales|RBTPG703|Global  

> Ejemplo de invocación al servicio de Obtener Condiciones Generales: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerCondicionesGenerales> 
         <bts:Btinreq> 
           <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerCondicionesGenerales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerCondicionesGenerales' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
      "Btinreq": { 
         "Device": 1, 
         "Canal": "BTDIGITAL", 
         "Token": "959C2E0AEF210ABC0D8AA8F7", 
         "Usuario": "INSTALADOR", 
         "Requerimiento": "?" 
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
      <BTIndicadores.ObtenerCondicionesGeneralesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtCondicionesGenerales> 
            <parametrosGeneralesWF>NO</parametrosGeneralesWF> 
            <reglasNegocio>SI</reglasNegocio> 
            <debug>SI</debug> 
            <opcionPAE>NO</opcionPAE> 
            <fechaCierreCanales>2022-10-12</fechaCierreCanales> 
            <fechaCierre>2020-10-12</fechaCierre> 
            <fechaAperturaCanales>2022-10-13</fechaAperturaCanales> 
            <empresasIguales>NO</empresasIguales> 
            <opcionWorkFlow>SI</opcionWorkFlow> 
            <cantidadPAE>21</cantidadPAE> 
            <opcion7x24>SI</opcion7x24> 
            <fechaApertura>2020-10-13</fechaApertura> 
            <cantidadReglas>294</cantidadReglas> 
            <periodo7x24/> 
         </sdtCondicionesGenerales> 
         <Erroresnegocio/> 
         <Btoutreq> 
            <Numero>11990</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerCondicionesGenerales</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>14:55:00</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerCondicionesGeneralesResponse> 
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
   "sdtCondicionesGenerales": { 
      "parametrosGeneralesWF": "NO", 
      "reglasNegocio": "SI", 
      "debug": "SI", 
      "opcionPAE": "NO", 
      "fechaCierreCanales": "2022-10-12", 
      "fechaCierre": "2020-10-12", 
      "fechaAperturaCanales": "2022-10-13", 
      "empresasIguales": "NO", 
      "opcionWorkFlow": "SI", 
      "cantidadPAE": 21, 
      "opcion7x24": "SI", 
      "fechaApertura": "2020-10-13", 
      "cantidadReglas": 294, 
      "periodo7x24": "" 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11990, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerCondicionesGenerales", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "14:55:00" 
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
sdtCondicionesGenerales | sBTCondicionesGenerales | Listado de las Condiciones Generales. 

Los campos del tipo de dato estructurado sBTCondicionesGenerales son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
debug | String | Opción debug. 
opcion7x24 | String | Opción 7x24. 
periodo7x24 | String | Periodo 7x24. 
opcionPAE | String | Opción PAE. 
cantidadPAE | Int | Cantidad PAE. 
reglasNegocio | String | Opción reglas de negocio. 
cantidadReglas | Int | Cantidad reglas. 
parametrosGeneralesWF | String | Parametros Generales de Workflow. 
opcionWorkFlow | String | Opción Workflow. 
empresasIguales | String | Empresas iguales. 
fechaAperturaCanales | Date | Fecha de apertura de canales. 
fechaCierreCanales | Date | Fecha de cierre de canales. 
fechaApertura | Date | Fecha de apertura. 
fechaCierre | Date | Fecha de cierre. 

### Errores 

No aplica. 


 
