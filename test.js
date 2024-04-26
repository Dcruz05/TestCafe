import { Selector } from 'testcafe';

fixture('Estudiantes')
    .page('testcafe-small-flower-9356.fly.dev');

test('Verificar valores en array', async t => {
    await t
        .typeText('#nombre', 'John Smith')
        .typeText('#noCuenta', '20189431')
        .typeText('#password', '123456789')
        .click('#enviar')
        .expect(Selector('#resultado').innerText).eql('Nombre: John Smith, No. de Cuenta: 20189431 Contraseña: 123456789');
});

// Crear un test que verifique si pueden ingresarse datos en esos campos y enviar los valores al array estudiantes