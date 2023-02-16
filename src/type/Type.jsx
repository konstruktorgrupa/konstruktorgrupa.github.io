import "./Type.css";

setTimeout(() => {
  function Init() {
    function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 200,
        tempTypeSpeed = 0;

      var type = function () {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = Math.random() * typeSpeed + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }
      };

      return {
        type: type,
      };
    }

    var typer = document.getElementById("typewriter");

    let typewriter = setupTypewriter(typer);

    typewriter.type();
  }
  Init();
}, 1000);

function Type() {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
      <pre id="typewriter">
        {`
        - PLINSKE INSTALACIJE
        - CENTRALNO GRIJANJE
        - VODOVOD I ODVOD
        - DIZALICE TOPLINE
        - SOLARNI SUSTAVI
        - KLIMATIZACIJA                                                                                    `}
      </pre>
    </div>
  );
}
export default Type;
