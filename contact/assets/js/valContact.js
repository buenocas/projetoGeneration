document.getElementById('btnEnviar').addEventListener('click', () => {

    let nc = document.getElementById('nomeCompleto').value;

    let email = document.getElementById('emailValid').value;

    let tel = document.getElementById('telValid').value;

    let textArea = document.getElementById('textArea').value;

    let nctrim = nc.trim('');

    let emailReplace = email.replace(/\s/g, '');

    let textAreaTrim = textArea.trim();


    document.getElementById('emailValid').value = emailReplace;

    if ((nctrim.length > 5) && nctrim.includes(' ')) {
        document.getElementById('alert-nome').style.visibility = "hidden";

    } else {

        document.getElementById('alert-nome').style.visibility = "visible";
        document.getElementById('alert-nome').innerHTML = "Nome Inválido"

    }

    if ((email.length > 5) && (email.includes("@")) && (email.endsWith(".com"))
        || (email.includes('.br')) || (email.endsWith(".net")) || (email.endsWith(".org"))
        || (email.endsWith(".ong")) && (!emailReplace.search(''))) {

        document.getElementById('alert-email').style.visibility = "hidden";

    } else {

        document.getElementById('alert-email').style.visibility = "visible";
        document.getElementById('alert-email').innerHTML = "Email Inválido"

    }
    if ((textAreaTrim.length > 5)) {
        document.getElementById('alert-textArea').style.visibility = "hidden";

    } else {

        document.getElementById('alert-textArea').style.visibility = "visible";
        document.getElementById('alert-textArea').innerHTML = "Insira no mínimo 10 caractéres"

    }


    // function mask(o, f) {
    //     setTimeout(function () {
    //         var v = mphone(o.value);
    //         if (v != o.value) {
    //             o.value = v;
    //         }
    //     }, 1);
    // }

    // function mphone(v) {
    //     var r = v.replace(/\D/g, "");
    //     r = r.replace(/^0/, "");
    //     if (r.length > 10) {
    //         r = r.replace(/^(\d\d)(\d{5})(\d{4})./, "($1) $2-$3");
    //     } else if (r.length > 5) {
    //         r = r.replace(/^(\d\d)(\d{4})(\d{0,4})./, "($1) $2-$3");
    //     } else if (r.length > 2) {
    //         r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    //     } else {
    //         r = r.replace(/^(\d*)/, "($1");
    //     }
    //     return r;
    // }

})