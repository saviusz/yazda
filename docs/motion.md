# Motion

Movement is the main feature of Camera Dolly.

## Move command

Used to move Dolly to specified position.

```json
{
    "target": 96.7,
    "easing": "linear",
    "speed": 14
}
```

Returns: [`status`](status.md)

### `target`
Values: <code>$\left[ 0; 100 \right]$</code> or <code>+/-$\left[ 0; 100 \right]$</code>

Accepts absolute values when provided without sign.
Relative values (with "+/-") adds (or removes) value to hosted position.

### `easing`
Values: `linear`

### `speed`
Values: <code>$\left(0; \infty\right]$</code>