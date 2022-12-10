**Passing Value from Child to Parent Component**

**Angular**

  **Child Component**
  ```
  data="hello"
  @Output() eventname=new EventEmitter();
  eventname.emit(data);
  ```
  **Parent Component**
  ```
  <child-component (eventname)=datareceive($event)></child-component>
  datareceive(data)
  {
  console.log(data)
  }
  
  ```
  **Vue**
  ## Child Component
  ```
  data="hello"
  this.$emit("eventname",data);
  ```
  ## Parent Component
  ```
  <child-component @eventname=datareceive($event)></child-component>
  methods:{
  datareceive(data)
  {
  console.log(data);
  }
  }
  ```
  **React**
  
  ## Child Component
  ```
  const [name,setName]=useState("varsha")
  
  props.eventname=name;
  ```
  ## Parent Component
  ```
  function datareceive(e,data)
  {
    e.preventDefault();
    console.log(data);
  }
  <child-component eventname={datareceive}></child-component>
  
   ```

  
