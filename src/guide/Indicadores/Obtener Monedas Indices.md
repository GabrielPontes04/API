# Obtener Monedas Indices 

Método para obtener las monedas e índices en funcionamiento. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTIndicadores.ObtenerMonedasIndices | RBTPG704 | Global 

> Ejemplo de invocación al servicio de Obtener Monedas Indices: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerMonedasIndices> 
         <bts:Btinreq> 
           <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerMonedasIndices> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerMonedasIndices' \ 
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
      <BTIndicadores.ObtenerMonedasIndicesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtMonedas> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>0</codigo> 
               <nombre>Pesos</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>105</codigo> 
               <nombre>DOLAR AUSTRALIANO</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>500</codigo> 
               <nombre>PESOS ARGENTINOS</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>1111</codigo> 
               <nombre>EURO</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>2222</codigo> 
               <nombre>DÓLAR ESTADOUNIDENSE</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>2225</codigo> 
               <nombre>DÓLAR ESTADOUNIDENSE - BILLETE</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>3600</codigo> 
               <nombre>YENS</nombre> 
            </sBTMonedaIndice> 
         </sdtMonedas> 
         <sdtIndices> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>0</codigo> 
               <nombre>Billete</nombre> 
            </sBTMonedaIndice> 
            <sBTMonedaIndice> 
               <tipoCambio>N</tipoCambio> 
               <codigo>50</codigo> 
               <nombre>Unidad de Valor Adquisitivo</nombre> 
            </sBTMonedaIndice> 
         </sdtIndices> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11991</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerMonedasIndices</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>15:09:29</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerMonedasIndicesResponse> 
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
   "sdtMonedas": { 
      "sBTMonedaIndice": [ 
      { 
         "tipoCambio": "N", 
         "codigo": 0, 
         "nombre": "Pesos" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 105, 
         "nombre": "DOLAR AUSTRALIANO" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 500, 
         "nombre": "PESOS ARGENTINOS" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 1111, 
         "nombre": "EURO" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 2222, 
         "nombre": "DÓLAR ESTADOUNIDENSE" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 2225, 
         "nombre": "DÓLAR ESTADOUNIDENSE - BILLETE" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 3600, 
         "nombre": "YENS" 
      } 
      ] 
   }, 
   "sdtIndices": { 
      "sBTMonedaIndice": [ 
      { 
         "tipoCambio": "N", 
         "codigo": 0, 
         "nombre": "Billete" 
      }, 
      { 
         "tipoCambio": "N", 
         "codigo": 50, 
         "nombre": "Unidad de Valor Adquisitivo" 
      } 
      ] 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11991, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerMonedasIndices", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "15:09:29" 
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
sdtMonedas | sBTMonedaIndice | Listado de monedas en uso contable. 

Los campos del tipo de dato estructurado sBTMonedaIndice son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Int | Código identificador de moneda. 
nombre | String | Nombre de moneda. 
tipoCambio | String | Tipo Cambio. 

### Errores 

No aplica. 


 
