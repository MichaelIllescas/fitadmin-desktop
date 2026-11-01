# Historias de usuario

Requerimientos que guiaron el desarrollo de FitAdmin, escritos desde el punto de vista del administrador del gimnasio.

## Socios

**HU-1.** Como administrador, quiero registrar nuevos socios con nombre, apellido, DNI, email, teléfono, dirección y fecha de nacimiento, para tener su información completa y poder vincularla con pagos y asistencias.

**HU-2.** Como administrador, quiero editar y dar de baja a un socio, para mantener los datos actualizados.

**HU-3.** Como administrador, quiero ver el historial de asistencias y pagos de un socio, para conocer su regularidad y su estado de cuenta.

## Cuotas y pagos

**HU-4.** Como administrador, quiero registrar un pago eligiendo el socio, el tipo de cuota, la fecha y la modalidad de pago, para llevar el control de lo cobrado.

**HU-5.** Como administrador, quiero definir y editar los tipos de cuota (mensual, semanal, diaria) y sus precios, para adaptarlos a la estrategia del gimnasio.

**HU-6.** Como administrador, quiero ver una alerta al registrar la asistencia de un socio con la cuota vencida, para avisarle del atraso en el momento.

**HU-7.** Como administrador, quiero filtrar los socios con cuotas vencidas, para hacer seguimiento o contactarlos.

## Asistencias

**HU-8.** Como administrador, quiero registrar la asistencia diaria buscando al socio por nombre o DNI, para controlar los ingresos al gimnasio.

**HU-9.** Como administrador, quiero ver el historial de asistencias de cada socio, para conocer su nivel de compromiso.

**HU-10.** Como administrador, quiero ver cuántas personas ingresaron por día, para analizar el flujo de asistencia.

## Gastos y rentabilidad

**HU-11.** Como administrador, quiero registrar gastos como alquiler, servicios y otros, para controlar los egresos del gimnasio.

**HU-12.** Como administrador, quiero que el sistema calcule la rentabilidad mensual a partir de ingresos y egresos, para saber si el gimnasio es rentable.

**HU-13.** Como administrador, quiero ver la recaudación diaria, mensual y anual, para tener una visión clara de los ingresos.

**HU-14.** Como administrador, quiero ver reportes con ingresos, egresos y ganancia neta, para tomar decisiones financieras.

## Panel principal

**HU-15.** Como administrador, quiero ver en el panel principal la cantidad de socios, las ganancias del día y del mes, la rentabilidad, un acceso rápido a asistencias y los socios con cuota vencida, para conocer el estado del negocio de un vistazo.

## Plan de desarrollo

Las historias se implementaron en este orden:

| Fase | Alcance | Historias |
|---|---|---|
| 1 | Gestión de socios | HU-1, HU-2 |
| 2 | Tipos de cuota | HU-5 |
| 3 | Pagos | HU-4, HU-7 |
| 4 | Asistencias | HU-8, HU-6, HU-9, HU-10 |
| 5 | Finanzas y reportes | HU-11, HU-12, HU-13, HU-14, HU-15 |
| 6 | Historial completo por socio | HU-3 |
