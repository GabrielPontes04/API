# Obtener Bolsillos 

Método para devolver los bolsillos de un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerBolsillos | RBTPG617 | Global 

> Ejemplo de invocación al servicio de Obtener Bolsillos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerBolsillos> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>322</bts:clienteUId> 
      </bts:BTClientes.ObtenerBolsillos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerBolsillos' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "e2db881814CD285A89A23FBE", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"clienteUId": 322, 
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
      <BTClientes.ObtenerBolsillosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>CC6345192D8633F531F01D1D</Token> 
         </Btinreq> 
         <sdtProductosPasivos> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta/> 
               <operacionUId>18766</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_010</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900010000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta/> 
               <operacionUId>18668</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_012</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900012000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta/> 
               <operacionUId>18824</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_037</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900037000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta/> 
               <operacionUId>18825</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_038</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900038000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18826</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_039</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900039000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18827</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_040</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900040000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18828</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_041</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900041000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18829</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_042</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900042000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18686</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_027</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900027000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18687</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_028</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900028000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18684</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_025</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900025000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18685</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_026</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900026000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18688</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_029</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900029000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18689</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_030</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900030000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18690</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_031</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900031000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18691</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_032</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900032000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18692</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_033</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900033000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18693</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_034</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900034000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18694</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_035</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900035000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18695</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_036</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900036000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18674</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_018</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900018000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18669</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_013</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900013000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18670</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_014</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900014000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18678</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_022</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900022000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18672</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_016</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900016000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18673</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_017</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900017000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18675</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_019</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900019000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18676</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_020</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900020000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18666</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_008</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900008000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18665</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_007</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900007000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18765</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_005</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900005000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18664</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_006</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900006000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18764</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_009</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900009000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18604</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_001</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900001000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18624</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_002</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900002000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18625</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_003</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900003000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18667</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_011</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900011000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18671</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_015</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900015000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18677</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_021</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900021000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18679</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_023</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900023000000000002</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>512</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Gastos</subCuenta> 
               <operacionUId>18680</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_024</idOperacionFmt> 
               <idOperacionBT>0010100000221000000000000000002900024000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Ciudad de la Costa</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Ahorro</subCuenta> 
               <operacionUId>18711</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_050</idOperacionFmt> 
               <idOperacionBT>0010000100221222200000000000002900050000000000001</idOperacionBT> 
               <producto> 
                  <moneda>USD</moneda> 
                  <papel/> 
                  <productoUId>531</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Bolsillo Ahorro</subCuenta> 
               <operacionUId>18712</operacionUId> 
               <saldo>910000.00</saldo> 
               <idOperacionFmt>000000029_051</idOperacionFmt> 
               <idOperacionBT>0010000100221222200000000000002900051000000000001</idOperacionBT> 
               <producto> 
                  <moneda>USD</moneda> 
                  <papel/> 
                  <productoUId>531</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <tipoProducto>CB</tipoProducto> 
               <estado>Normal</estado> 
               <subCuenta>Contratacion</subCuenta> 
               <operacionUId>19170</operacionUId> 
               <saldo>0.00</saldo> 
               <idOperacionFmt>000000029_053</idOperacionFmt> 
               <idOperacionBT>0010000100221000000000000000002900053000000000001</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel/> 
                  <productoUId>511</productoUId> 
                  <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
            </sBTProductoPasivo> 
         </sdtProductosPasivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>228501</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerBolsillos</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-11-01</Fecha> 
            <Hora>11:31:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerBolsillosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "e2db881814CD285A89A23FBE", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "sdtProductosPasivos": { 
      "sBTProductoPasivo": [ 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "", 
         "operacionUId": 18766, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_010", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "", 
         "operacionUId": 18668, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_012", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "", 
         "operacionUId": 18824, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_037", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "", 
         "operacionUId": 18825, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_038", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18826, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_039", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18827, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_040", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18828, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_041", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18829, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_042", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18686, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_027", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18687, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_028", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18684, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_025", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18685, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_026", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18688, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_029", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18689, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_030", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18690, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_031", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18691, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_032", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18692, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_033", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18693, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_034", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18694, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_035", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18695, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_036", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18674, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_018", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18669, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_013", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18670, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_014", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18678, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_022", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18672, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_016", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18673, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_017", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18675, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_019", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18676, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_020", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18666, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_008", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18665, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_007", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18765, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_005", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18664, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_006", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18764, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_009", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18604, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_001", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18624, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_002", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18625, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_003", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18667, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_011", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18671, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_015", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18677, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_021", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18679, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_023", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 512, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Gastos", 
         "operacionUId": 18680, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_024", 
         "idOperacionBT": 1.0100000221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Ciudad de la Costa" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Ahorro", 
         "operacionUId": 18711, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_050", 
         "idOperacionBT": 1.00001002212222e+46, 
         "producto": { 
            "moneda": "USD", 
            "papel": "", 
            "productoUId": 531, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Bolsillo Ahorro", 
         "operacionUId": 18712, 
         "saldo": 910000, 
         "idOperacionFmt": "000000029_051", 
         "idOperacionBT": 1.00001002212222e+46, 
         "producto": { 
            "moneda": "USD", 
            "papel": "", 
            "productoUId": 531, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Beta" 
      }, 
      { 
         "tipoProducto": "CB", 
         "estado": "Normal", 
         "subCuenta": "Contratacion", 
         "operacionUId": 19170, 
         "saldo": 0, 
         "idOperacionFmt": "000000029_053", 
         "idOperacionBT": 1.0000100221e+46, 
         "producto": { 
            "moneda": "$", 
            "papel": "", 
            "productoUId": 511, 
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro" 
         }, 
         "sucursal": "Sucursal Beta" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTClientes.ObtenerBolsillos", 
      "Requerimiento": "1", 
      "Fecha": "2023-10-11", 
      "Canal": "BTDIGITAL", 
      "Hora": "15:10:52" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductosPasivos | sBTProductoPasivo | Listado de bolsillos. 

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del Producto pasivo. 
tipoProducto | String | Tipo de producto pasivo (Cuenta Corriente: 'CC', Caja de Ahorro: 'CA'). 
sucursal | String | Nombre de la sucursal de origen de la operación. 
subcuenta | String | Nombre de la cuenta vista. 
saldo | Decimal | Saldo. 
estado | String | Descripción de estado. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 


### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador único de cuenta. 
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador]. 

 
