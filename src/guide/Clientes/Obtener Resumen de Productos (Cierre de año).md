# Obtener Resumen de Productos (Cierre de año) 

Método para obtener un resumen de productos de un cliente al cierre del año. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerResumenProductosACierreAnio | RBTPG257 | Global 

> Ejemplo de invocación al método Obtener Resumen de Productos (Cierre de año): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerResumenProductosACierreAnioACierreAnio> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>324915377F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:anioConsulta>2016</bts:anioConsulta> 
      </bts:BTClientes.ObtenerResumenProductosACierreAnioACierreAnio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerResumenProductosACierreAnio=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 429ec47f-4843-8dca-c8f7-32c004addb68' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "324915377F955E77534D3E02" 
	}, 
    "clienteUId": "1", 
    "anioConsulta": "2017" 
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
      <BTClientes.ObtenerResumenProductosACierreAnioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtResumenProductos> 
            <cuentasCorrientes> 
               <descripcion>Cuentas Corrientes</descripcion> 
               <cantidad>3</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>26799806.42</saldoMN> 
            </cuentasCorrientes> 
            <cajasAhorros> 
               <descripcion>Cajas de Ahorro</descripcion> 
               <cantidad>4</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </cajasAhorros> 
            <cofresSeguridad> 
               <descripcion>Cofres de Seguridad</descripcion> 
               <cantidad>0</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </cofresSeguridad> 
            <otros></otros> 
            <tarjetasCredito> 
               <descripcion/> 
               <cantidad>0</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </tarjetasCredito> 
            <tarjetasDebito> 
               <descripcion>Tarjetas de Débito</descripcion> 
               <cantidad>0</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </tarjetasDebito> 
            <plazosFijos> 
               <descripcion>Plazos Fijos</descripcion> 
               <cantidad>4</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>413217.36</saldoMN> 
            </plazosFijos> 
            <prestamos> 
               <descripcion>Préstamos</descripcion> 
               <cantidad>16</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>2709617.59</saldoMN> 
            </prestamos> 
            <clienteUId>4</clienteUId> 
         </sdtResumenProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>841</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerResumenProductosACierreAnio</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>02:19:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerResumenProductosACierreAnioResponse> 
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
    "sdtResumenProductos": { 
        "cuentasCorrientes": { 
            "descripcion": "Cuentas Corrientes", 
            "cantidad": "3", 
            "saldoUSD": "0.00", 
            "saldoMN": "26799806.42" 
        }, 
        "cajasAhorros": { 
            "descripcion": "Cajas de Ahorro", 
            "cantidad": "4", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "cofresSeguridad": { 
            "descripcion": "Cofres de Seguridad", 
            "cantidad": "0", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "otros": { 
            "sCTResumenProducto": [] 
        }, 
        "tarjetasCredito": { 
            "descripcion": "", 
            "cantidad": "0", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "tarjetasDebito": { 
            "descripcion": "Tarjetas de Débito", 
            "cantidad": "0", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "plazosFijos": { 
            "descripcion": "Plazos Fijos", 
            "cantidad": "4", 
            "saldoUSD": "0.00", 
            "saldoMN": "413217.36" 
        }, 
        "prestamos": { 
            "descripcion": "Préstamos", 
            "cantidad": "16", 
            "saldoUSD": "0.00", 
            "saldoMN": "2709617.59" 
        }, 
        "clienteUId": "4" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "842", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerResumenProductosACierreAnio", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "02:19:57", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
anioConsulta | Short | Año a consultar. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtResumenProductos | sCTInfoProductos | Listado de productos. 

Los campos del tipo de dato estructurado sCTInfoProductos son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
cuentasCorrientes | sCTResumenProducto |  Cuentas corrientes. 
cajasAhorros | sCTResumenProducto |  Cajas de ahorro. 
cofresSeguridad | sCTResumenProducto |  Cofres de seguridad. 
tarjetasDebito | sCTResumenProducto |  Tarjetas de débito. 
plazosFijos | sCTResumenProducto |  Plazos fijos. 
prestamos | sCTResumenProducto |  Préstamos. 
clienteUId | Int |  Identificador único de cliente. 

Los campos del tipo de dato estructurado sCTResumenProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción. 
cantidad | Int |  Cantidad de operaciones. 
saldoUSD | Double |  Saldo disponible en dólares. 
saldoMN | Double |  Saldo disponible en moneda nacional. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el Identificador. 

 
