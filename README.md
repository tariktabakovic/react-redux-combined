# Node modules you need:
    - `redux`
    - `react-redux`

# Conventions (what files to put your code in)


# Redux

- `actions.js` - action constants and your action creator functions.
- `reducers.js` (or a folder) - import your actions and define reducer function.
- `CounterApp.js` - define the store so that the React app can use it.


# React


# 'Dumb Components'

- they know nothing about redux
- they accept props
    - show the props
    - use props as event handlers
- `components/` - holds all your dumb components

# 'Smart Containers'

- they know all about redux
    - have access to redux `state` 
    - can call the store's `dispatch()`
- they don't know about React
    - they import your dumb components
- they wire together your dumb compoents and redux's `state` and `dispatch`
    - define `mapStateToProps` function
    - define `mapDispatchProps` function