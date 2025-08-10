# Basic usage

First, power on the Controller and obtain its address.

## Connecting to the Controller
To manage the Camera Dolly, provide the Controller’s WebSocket address to the dashboard.
The dashboard will use this address to connect and initialize communication.

Once connected, the dashboard can send various commands to the Dolly.

## Status
The dashboard may require the current Dolly status. This is provided via the [Status Message](status.md#status-message), which is emitted after every status update.

You can also request an update manually using the [Get Status Command](./status.md#get-status-command).

## Calibration
Immediately after power-up, the Camera Dolly is not calibrated, and only a limited set of actions is available.

To calibrate, send the [Calibration Command](calibration.md#calibrate-command).

## Movement
Movement is the primary function of the Camera Dolly.
To initiate movement, send the [Move Command](motion.md#move-command).