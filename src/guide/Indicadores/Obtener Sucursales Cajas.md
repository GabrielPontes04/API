# Obtener Sucursales Cajas 

Método para obtener porcentajes y listados de sucursales y cajas del sistema. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTIndicadores.ObtenerSucursalesCajas | RBTPG705 | Global 

> Ejemplo de invocación al servicio de Obtener Sucursales Cajas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerSucursalesCajas> 
         <bts:Btinreq> 
           <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerSucursalesCajas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerSucursalesCajas' \ 
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
      <BTIndicadores.ObtenerSucursalesCajasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtSucursalesCajas> 
            <cajasCerradas>0</cajasCerradas> 
            <porcentajeCajasA>100.00</porcentajeCajasA> 
            <listadoCajasA> 
               <sBTCaja> 
                  <usuario>ASESOR</usuario> 
                  <nombre>ASESOR</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>BANTOTAL</usuario> 
                  <nombre>BANTOTAL</nombre> 
                  <indicador>111</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>CAJERO</usuario> 
                  <nombre>CAJERO</nombre> 
                  <indicador>402</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>CAPTACCONF</usuario> 
                  <nombre>CAPTACCONF</nombre> 
                  <indicador>350</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>CAPTACION</usuario> 
                  <nombre>CAPTACION</nombre> 
                  <indicador>401</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>EJECCUENTA</usuario> 
                  <nombre>EJECCUENTA</nombre> 
                  <indicador>23</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>GERENTE</usuario> 
                  <nombre>GERENTE</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>INSTALADOR</usuario> 
                  <nombre>INSTALADOR</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>INSTALADORBANTOTAL</usuario> 
                  <nombre>INSTALADOR BANTOTAL2</nombre> 
                  <indicador>5000</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>JEFE</usuario> 
                  <nombre>JEFE</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>SEGURIDAD</usuario> 
                  <nombre>SEGURIDAD</nombre> 
                  <indicador>55</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>TESORSUC</usuario> 
                  <nombre>TESORSUC</nombre> 
                  <indicador>403</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>USUARIOBIT</usuario> 
                  <nombre/> 
                  <indicador>17</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
            </listadoCajasA> 
            <listadoSucursalesC> 
               <sBTSucursal> 
                  <telefono/> 
                  <descripcion>Sucursal 25634</descripcion> 
                  <direccion/> 
                  <identificador>25634</identificador> 
                  <longitud>0E-14</longitud> 
                  <latitud>0E-14</latitud> 
               </sBTSucursal> 
            </listadoSucursalesC> 
            <cajasAbiertas>13</cajasAbiertas> 
            <listadoSucursalesA> 
               <sBTSucursal> 
                  <telefono/> 
                  <descripcion>Casa Matriz</descripcion> 
                  <direccion/> 
                  <identificador>1</identificador> 
                  <longitud>0E-14</longitud> 
                  <latitud>0E-14</latitud> 
               </sBTSucursal> 
               <sBTSucursal> 
                  <telefono/> 
                  <descripcion>Sucursal Ciudad de la Costa</descripcion> 
                  <direccion/> 
                  <identificador>1000</identificador> 
                  <longitud>0E-14</longitud> 
                  <latitud>0E-14</latitud> 
               </sBTSucursal> 
            </listadoSucursalesA> 
            <sucursalesCerradas>1</sucursalesCerradas> 
            <sucursalesAbiertas>2</sucursalesAbiertas> 
            <porcentajeSucursalesC>33.33</porcentajeSucursalesC> 
            <totalCajas>13</totalCajas> 
            <porcentajeSucursalesA>66.66</porcentajeSucursalesA> 
            <porcentajeCajasC>0.00</porcentajeCajasC> 
            <totalSucursales>3</totalSucursales> 
            <listadoCajasC></listadoCajasC> 
         </sdtSucursalesCajas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11992</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerSucursalesCajas</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>15:20:16</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerSucursalesCajasResponse> 
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
   "sdtSucursalesCajas": { 
      "cajasCerradas": 0, 
      "porcentajeCajasA": 100, 
      "listadoCajasA": { 
      "sBTCaja": [ 
         { 
            "usuario": "ASESOR", 
            "nombre": "ASESOR", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "indicador": 111, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "indicador": 402, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "CAPTACCONF", 
            "nombre": "CAPTACCONF", 
            "indicador": 350, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "CAPTACION", 
            "nombre": "CAPTACION", 
            "indicador": 401, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "EJECCUENTA", 
            "nombre": "EJECCUENTA", 
            "indicador": 23, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "INSTALADOR", 
            "nombre": "INSTALADOR", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "INSTALADORBANTOTAL", 
            "nombre": "INSTALADOR BANTOTAL2", 
            "indicador": 5000, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "JEFE", 
            "nombre": "JEFE", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "SEGURIDAD", 
            "nombre": "SEGURIDAD", 
            "indicador": 55, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "TESORSUC", 
            "nombre": "TESORSUC", 
            "indicador": 403, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "USUARIOBIT", 
            "nombre": "", 
            "indicador": 17, 
            "sucursalId": 1 
         } 
      ] 
      }, 
      "listadoSucursalesC": { 
      "sBTSucursal": { 
         "telefono": "", 
         "descripcion": "Sucursal 25634", 
         "direccion": "", 
         "identificador": 25634, 
         "longitud": 0, 
         "latitud": 0 
      } 
      }, 
      "cajasAbiertas": 13, 
      "listadoSucursalesA": { 
      "sBTSucursal": [ 
         { 
            "telefono": "", 
            "descripcion": "Casa Matriz", 
            "direccion": "", 
            "identificador": 1, 
            "longitud": 0, 
            "latitud": 0 
         }, 
         { 
            "telefono": "", 
            "descripcion": "Sucursal Ciudad de la Costa", 
            "direccion": "", 
            "identificador": 1000, 
            "longitud": 0, 
            "latitud": 0 
         } 
      ] 
      }, 
      "sucursalesCerradas": 1, 
      "sucursalesAbiertas": 2, 
      "porcentajeSucursalesC": 33.33, 
      "totalCajas": 13, 
      "porcentajeSucursalesA": 66.66, 
      "porcentajeCajasC": 0, 
      "totalSucursales": 3, 
      "listadoCajasC": "" 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11992, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerSucursalesCajas", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "15:20:16" 
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
totalSucursales | Int | Número total de sucursales. 
sucursalesCerradas | Int | Número de sucursales cerradas. 
sucursalesAbiertas | Int | Número de sucursales abiertas. 
porcentajeSucursalesC | Int | Porcentaje de sucursales cerradas. 
porcentajeSucursalesA | Int | Porcentaje de sucursales abiertas. 
listadoSucursalesC | sBTSucursal | Listado de sucursales cerradas. 
listadoSucursalesA | sBTSucursal | Listado de sucursales abiertas. 
totalCajas | Int | Número total de cajas.     
cajasCerradas | Int | Número de cajas cerradas. 
cajasAbiertas | Int | Número de cajas abiertas. 
porcentajeCajasC | Int | Porcentaje de cajas cerradas. 
porcentajeCajasA | Int | Porcentaje de ajas abiertas. 
listadoCajasC | sBTCaja | Listado de cajas cerradas. 
listadoCajasA | sBTCaja | Listado de cajas abiertas. 

Los campos del tipo de dato estructurado sBTSucursal son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador de sucursal. 
descripcion | String | Descripción de la sucursal. 
direccion | String | Dirección de la sucursal. 
telefono | String | Teléfono de la sucursal. 
latitud | Int | Latitud de la sucursal. 
longitud | Int | Longitud de la sucursal. 

Los campos del tipo de dato estructurado sBTCaja son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
sucursalId | Int | Identificador de la sucursal. 
usuario | String | Usuario de la caja. 
indicador | Int | Indicador de la caja. 
nombre | String | Nombre de la caja. 

### Errores 

No aplica. 


 
