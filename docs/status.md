# Status
The Camera Rig Controller periodicly sends updates of its physical proparties.
A snapshot of these propaties is refferd to as **status**.

Status updates should be broadcast whenever a change occurs.

## Get Status Command
Requests an immediate status update.

```json
{}
```

## Status Message
A status message contains the current state of the Rig.

Example body:
```json
{
    "status": "moving-r",
    "position": 30,
    "target": 61,
    "easing": "linear",
}
```

### `status`
Indicates the calibration state of the Rig.
Possible values:
* `uncalibrated` - Rig has not been calibrated
* `calibration` - Rig is performing calibration
* `ready` - Rig is ready to use

### `motion`
Indicates the motion state of the Rig.
Possible values:
* `stopped`– No movement.
* `moving-l` – Moving left.
* `moving-r` – Moving right.

### `position`
Current position of the Rig, expressed as a value between `0` and `100`, or `null` if
`status` is `uncalibrated`.

### `target`
Target position of the Rig, expressed as a value between `0` and `100`.
`null` if no target is set (e.g., when motion is stopped).

### `easing`
The easing function applied to movement.
Possible values:
* `linear`