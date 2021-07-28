function show(param_div_id) {
    const ids = {
      operation2: "operation1",
      operation1: "operation2",
    };
    document.getElementById(ids[param_div_id]).style.display = "none";
    document.getElementById(param_div_id).style.display = "block";
  }
  show("operation1");