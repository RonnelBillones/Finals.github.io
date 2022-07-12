 //Animal COMPONENTS//
 AFRAME.registerComponent("dog", {
    init: function () {
      console.log("init");
      let dog = $("#dog");
      let dogs = $("#dog");
      this.el.addEventListener(
        "click",
        function (e) {
        if (dog.attr('visible') === false) {
          dog.attr("visible", true);
        } else {
          dog.attr("visible", false);
        }
          console.log(dog.attr('visible'));
        }.bind(this)
        )
        this.el.addEventListener(
            "touch",
            function (e) {
            if (dog.attr('visible') === false) {
              dog.attr("visible", true);
            } else {
              dog.attr("visible", false);
            }
              console.log(dog.attr('visible'));
            }.bind(this)
          )
    },
  });
  AFRAME.registerComponent("cat", {
    init: function () {
      console.log("init")
      let cat = $("#cat")
      let cats = $("#cat")
      this.el.addEventListener(
        "click",
        function (e) {
            if (cat.attr('visible') === false) {
                cat.attr("visible", true);
            } else {
                cat.attr("visible", false);
            }
            console.log(cat.attr('visible'));
        }.bind(this)
      )
      this.el.addEventListener(
        "touch",
        function (e) {
          if (cat.attr('visible') === false) {
            cat.attr("visible", true);
        } else {
          cat.attr("visible", false);
        }
        console.log(cat.attr('visible'));
        }.bind(this)
      )
    },
  });

  AFRAME.registerComponent("mouse", {
    init: function () {
      console.log("init")
      let mouse = $("#mouse")
      let mouses = $("#mouse")
      this.el.addEventListener(
        "click",
        function (e) {
          if (mouse.attr('visible') === false) {
            mouse.attr("visible", true);
        } else {
          mouse.attr("visible", false);
        }
        console.log(mouse.attr('visible'));
        }.bind(this)
      )
      this.el.addEventListener(
        "touch",
        function (e) {
          if (mouse.attr('visible') === false) {
            moouse.attr("visible", true);
        } else {
          mouse.attr("visible", false);
        }
        console.log(mouse.attr('visible'));
        }.bind(this)
      )
    },
  });
