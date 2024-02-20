# Obtener Productos 

Método para obtener un listado de los productos cuentas de ahorro ingresados en Bantotal 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasDeAhorro.ObtenerProductos | RBTPG054 | Global 

> Ejemplo de invocación al método Obtener Productos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasDeAhorro.ObtenerProductos xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
      </BTCuentasDeAhorro.ObtenerProductos> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6bd8fd4d-69ed-56f1-79fc-8d458f726066' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
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
      <BTCuentasDeAhorro.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductos> 
            <sBTProducto> 
               <productoUId>1</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>2</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>3</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>4</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>5</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja Ahorro P.Física Especie</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>6</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja Ahorro P.Jurídica Especie</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>7</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro Junior</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>8</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro Junior</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>9</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro CTS</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>10</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro CTS</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>11</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>12</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>13</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>14</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>15</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Unificadas</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>16</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Unificadas</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>17</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Judiciales</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>18</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Ahorro Judiciales</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>19</productoUId> 
               <nombre>CAJAS DE AHORRO, Cuentas Gratuita Universal</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>20</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro con Libreta</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>21</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro con Libreta</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>988</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerProductos</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-22</Fecha> 
            <Hora>17:52:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerProductosResponse> 
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
    "sdtProductos": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "1", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "2", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "3", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Jurídica" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "4", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Jurídica" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "5", 
                "nombre": "CAJAS DE AHORRO, Caja Ahorro P.Física Especie" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "6", 
                "nombre": "CAJAS DE AHORRO, Caja Ahorro P.Jurídica Especie" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "7", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro Junior" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "8", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro Junior" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "9", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro CTS" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "10", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro CTS" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "11", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "12", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro c/Orden de Pago" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "13", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "14", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Remuneraciones" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "15", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Unificadas" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "16", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Unificadas" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "17", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Judiciales" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "18", 
                "nombre": "CAJAS DE AHORRO, Cuentas Ahorro Judiciales" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "19", 
                "nombre": "CAJAS DE AHORRO, Cuentas Gratuita Universal" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "20", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro con Libreta" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "21", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro con Libreta" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "989", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerProductos", 
        "Requerimiento": "", 
        "Fecha": "2017-12-22", 
        "Hora": "17:55:13", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 
No aplica 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductos | sBTProducto | Listado de productos 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto 
nombre | String | Nombre de producto 
moneda | String | Símbolo de moneda 
papel | String | Símbolo de papel  

### Errores 

No aplica 

ECHO está desactivado.
