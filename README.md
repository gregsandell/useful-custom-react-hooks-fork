# useful-custom-react-hooks-fork

Greg Sandell's fork of [useful-custom-react-hooks](https://github.com/WebDevSimplified/useful-custom-react-hooks).

The original repo is covered in these three videos:
1. [5 Custom React Hooks You Need In Every Project](https://www.youtube.com/watch?v=0c6znExIqRw).  
1. [5 More Custom React Hooks You Need In Every Project](https://www.youtube.com/watch?v=izXHsZ57UPs)
1. [Make React Easy With These 5 Custom React Hooks](https://www.youtube.com/watch?v=Ix_xeCuS4XA&t=0s)

# Summary of contents
My reactions:

* 1-useToggle and 5-useArray are great starter apps for custom hook writing
* 3-useDebounce very useful.  Uses 2-useTimeout
* 4-useUpdateEffect supplies the "missing case"  from useEffect(): run it the first time only
* 8-useStorage Save time writing session and localStorage routines
* 9-useAsync Reporting handler for an async call (loading/error states, value)
* 10-useFetch Same as 9 but specifically for fetch
* 18-useStateWithValidation looks useful for forms
* 11-useScript for importing a script (e.g. jQuery) from React code
* 13-useEventListener Demo that shows current keypress; not sure how it's useful
* 15-useWindowSize hook for general purpose event listening (?)
* 19-useSize uses special DOM function ResizeObserver.  Listens for all the changing values width, height, top, bottom, etc, and reports them back.
* 20-useEffectOnce Covers a case that useEffect doesn't have, to run only once.
* 21-useClickOutside employs 13-useEventListener. Don't know what its for.
* 22-useDarkMode employs 8-useStorage and 16-useMediaQuery.  All it does is toggle a CSS style?
* 23-useCopyToClipboard: uses npm package copy-to-clipboard.
