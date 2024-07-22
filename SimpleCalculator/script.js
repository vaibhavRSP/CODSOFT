document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const buttons = document.querySelectorAll("button");
    let operatorPressed = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            const action = button.getAttribute("data-action");

            if (action === "clear") {
                input.value = "";
                operatorPressed = false;
            } else if (action === "calculate") {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = "Error";
                }
                operatorPressed = false;
            } else {
                if (['+', '-', '*', '/'].includes(value)) {
                    if (operatorPressed) {
                        return;
                    } else {
                        operatorPressed = true;
                    }
                } else {
                    operatorPressed = false;
                }
                input.value += value;
            }
        });
    });
});