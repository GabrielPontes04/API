# Obtener Productos Habilitados 

Método para obtener un listado de los productos de deposito a plazo habilitados. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositoAPlazo.ObtenerProductosHabilitados | RBTPG447 | Global 

### Configuración Backend 

1) Configuración de productos válidos: 

* En adición a la guía 70100 se agrego que en el valor especifico 3 se indica el tipo de    producto, donde los valores posibles son: (1- Deposito al venicmiento, 2- Pago periódico de intereses). 

* Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | Valor incremental 
Correlativo 2 | Módulo 
Correlativo 3 | Tipo de operación 
Valor específico 1 | Moneda 
Valor específico 2 | Papel 
Importe específico 1 | Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario) 
Importe específico 2 | Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario) 
Importe específico 3 | Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior) 

> Ejemplo de invocación al método Obtener Productos Habilitados: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerProductosHabilitados> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:tipoDeProducto></bts:tipoDeProducto> 
      </bts:BTDepositosAPlazo.ObtenerProductosHabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
   "Btinreq": { 
            "Canal": "BTDIGITAL", 
            "Requerimiento": 1, 
            "Usuario": "INSTALADOR", 
            "Token": "30F74741A02C318CEFD55684", 
            "Device": "GL" 
         }, 
         "tipoDeProducto": "" 
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
      <BTDepositosAPlazo.ObtenerProductosHabilitados xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sBTProductosDepositoAPlazo> 
            <Producto> 
               <Producto> 
                  <productoUId>132</productoUId> 
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre> 
                  <moneda>S/.</moneda> 
                  <papel>$</papel> 
               </Producto> 
               <tipoDeDeposito>PP</tipoDeDeposito> 
               <DatosExtendidos></DatosExtendidos> 
            </Producto> 
         </sBTProductosDepositoAPlazo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.ObtenerProductosHabilitados</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:40:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>496</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerProductosHabilitados> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "sBTProductosDepositoAPlazo": { 
          "Producto": { 
            "Producto": { 
              "productoUId": 132, 
              "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.", 
              "moneda": "S/.", 
              "papel": "$" 
            }, 
            "tipoDeDeposito": "PP", 
            "DatosExtendidos": "" 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTDepositosAPlazo.ObtenerProductosHabilitados", 
          "Fecha": "2022-11-29", 
          "Hora": "10:40:47", 
          "Requerimiento": 1, 
          "Numero": 496, 
          "Estado": "OK" 
        } 
      } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tipoDeProducto | String | Tipo de producto (VTO: Vencimiento, PP: Pago periódico). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductosDepositoAPlazo | sBTProductosDepositoAPlazo | Listado de productos habilitados. 

Los campos del tipo de dato estructurado sBTProductosDepositoAPlazo son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
producto | sBTProducto | Producto. 
tipoDeDeposito | String | Tipo de depósito. (VTO: Vencimiento, PP: Pago periódico). 
datosExtendidos | sBTDatosExtendidos | Listado de datos complementarios. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave del dato extendido. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 
Lista | sBTDatosLista | Lista de datos 

### Errores 

No aplica. 

 
