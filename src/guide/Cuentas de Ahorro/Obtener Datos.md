# Obtener Datos 

Método para obtener los datos de un producto cuenta de ahorro en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasDeAhorro.ObtenerDatos | RBTPG007 | Global 

> Ejemplo de invocación al método Obtener Datos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasDeAhorro.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>281</bts:operacionUId> 
      </bts:BTCuentasDeAhorro.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 281 
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
      <BTCuentasDeAhorro.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCajaAhorro> 
            <cobraIntereses>S</cobraIntereses> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
            </producto> 
            <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT> 
            <saldoPorConfirmar>0.00</saldoPorConfirmar> 
            <descPaquete/> 
            <idOperacionFmt>000000011_001</idOperacionFmt> 
            <ejecutivo/> 
            <saldoCobertura>0.00</saldoCobertura> 
            <pagaInteresSobregiro>N</pagaInteresSobregiro> 
            <saldoDisponible>7433400.28</saldoDisponible> 
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos> 
            <saldoBloqueado>0.00</saldoBloqueado> 
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio> 
            <operacionUId>281</operacionUId> 
            <frecuenciaEmisionEC>Cuatrimestral</frecuenciaEmisionEC> 
            <diasSobregiro>0</diasSobregiro> 
            <saldoContable>7433400.28</saldoContable> 
            <estado>Normal</estado> 
            <fechaApertura>2015-12-23</fechaApertura> 
            <sucursal>Casa Matriz</sucursal> 
            <pagaComisEstadoCuenta/> 
            <paquete>N</paquete> 
         </sdtCajaAhorro> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>856</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerDatos</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>10:42:59</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerDatosResponse> 
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
    "sdtCajaAhorro": { 
        "cobraIntereses": "S", 
        "producto": { 
            "papel": "", 
            "moneda": "$", 
            "productoUId": "0", 
            "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
        }, 
        "idOperacionBT": "0010100000021000000000000000001100001000000000001", 
        "saldoPorConfirmar": "0.00", 
        "descPaquete": "", 
        "idOperacionFmt": "000000011_001", 
        "ejecutivo": "", 
        "saldoCobertura": "0.00", 
        "pagaInteresSobregiro": "N", 
        "saldoDisponible": "7433400.28", 
        "pagaComisCantMovimientos": "S", 
        "saldoBloqueado": "0.00", 
        "pagaComisBajoPromedio": "S", 
        "operacionUId": "281", 
        "frecuenciaEmisionEC": "Cuatrimestral", 
        "diasSobregiro": "0", 
        "saldoContable": "7433400.28", 
        "estado": "Normal", 
        "fechaApertura": "2015-12-23", 
        "sucursal": "Casa Matriz", 
        "pagaComisEstadoCuenta": "", 
        "paquete": "N" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "857", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerDatos", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "10:43:47", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCajaAhorro | sBTCajaAhorro | Datos de caja de ahorro. 

Los campos del tipo de dato estructurado sBTCajaAhorro son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del Producto. 
sucursal | String | Nombre de la sucursal de alta. 
estado | String | Descripción de estado de la operación. 
ejecutivo | String | Nombre de ejecutivo de alta. 
fechaApertura | Date | Fecha de alta. 
saldoContable | Double | Saldo total. 
saldoDisponible | Double | Saldo disponible. 
saldoBloqueado | Double | Saldo bloqueado. 
saldoPorConfirmar | Double | Saldo pendiente de confirmación. 
saldoCobertura | Double | Saldo de cobertura. 
paquete | String | Tiene paquete (S/N). 
descPaquete | String | Descripción de paquete. 
pagaComisBajoPromedio | String | Paga comisión por bajo promedio (S/N). 
pagaComisCantMovimientos | String | Paga comisión por cantidad de movimientos (S/N). 
pagaComisEstadoCuenta | String | Paga Comisión por estado de cuenta (S/N). 
pagaInteresSobregiro | String | Paga interes por sobregiro (S/N). 
diasSobregiro | Short | Días de Sobregiro. 
cobraIntereses | String | Cobra intereses (S/N). 
frecuenciaEmisionEC | String | Frecuencia de emisión de estado de cuenta. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó operación para el identificador: [Número de identificador]. 
30003 | La operación ingresada no corresponde a una cuenta de ahorro. 

 
