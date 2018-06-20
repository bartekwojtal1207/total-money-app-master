import React, { Component } from 'react';
import ContactTitle from './ContactTitle/ContactTitle';
import Input from './ContactForm/Input';
import Label from './ContactForm/Label';
import Button from './ContactForm/Button';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subtitle: 'Wypełnij, formularz, a Doradca z wybranego przez Ciebie banku skontaktuje się z Tobą i dopasuje oferte do Twoich potrzeb.',
            inputs: [
                {name: 'name', type: 'text', label: 'Imię', valid: false, isValid: false},
                {name: 'surname', type: 'text', label: 'Nazwisko', valid: false, isValid: false},
                {name: 'phone', type: 'text', label: 'Telefon', valid: false, isValid: false},
                {name: 'postCode', type: 'text', label: 'Kod pocztowy', valid: false, isValid: false},
            ],
            checkboxs: [
                {name: 'agreementConsent', type: 'checkbox', value: 0, isValid: false, label: 'Wyrażam zgodę na przetwarzanie',textTitle: 'więcej', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae suscipit turpis, eu molestie arcu. Nullam vitae dui nec sem mattis auctor id vel tortor.', visibleText: 'none' },
                {name: 'ofertsConsent', type: 'checkbox', value: 0, isValid: false, label: 'Wyrażam zgodę na otrzymywanie ',textTitle: 'więcej', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae suscipit turpis, eu molestie arcu. Nullam vitae dui nec sem mattis auctor id vel tortor.', visibleText: 'none'},
                {name: 'contactConsent', type: 'checkbox', value: 0, isValid: false, label: 'Wyrażam zgodę na przetwarzanieWyrażam urządzeń końcowych i automatycznych systemów',textTitle: 'więcej', text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae suscipit turpis, eu molestie arcu. Nullam vitae dui nec sem mattis auctor id vel tortor.', visibleText: 'none'},
            ],
            formIsValid : false,
            errorMessage : 'pole jest wymagane'
        }
    }

    onChangeInputValueHandler = (event, inputId) => {
        const inputs = this.state.inputs;
        inputs[inputId].isValid = true;

        if (inputs[inputId].isValid) {
            event.target.value !== '' ? inputs[inputId].valid = true : inputs[inputId].valid = false;
        }
        this.setState({ inputs: inputs})
    };

    onChangeCheckboxHandler = (event, index) => {
        const checkbox = this.state.checkboxs;

        checkbox[index].isValid = true;
        checkbox[index].value === 0 ? checkbox[index].value = 1 : checkbox[index].value = 0;

        this.setState({ checkboxs: checkbox})
    };

    onLabelInputClickHandler = (event, index) => {
        // this.onChangeInputValueHandler(event, index)
    }

    showAgreements(event, index) {
        const agreements = this.state.checkboxs;

        if (agreements[index].visibleText === 'block') {
            agreements[index].visibleText = 'none';
            agreements[index].textTitle = 'więcej';
        }else {
            agreements[index].visibleText = 'block';
            agreements[index].textTitle = 'mniej';
        }

        this.setState({ checkboxs: agreements })
    }

    render() {

        const input = this.state.inputs.map((input, index) =>
            <div className="form-group" key={index+'form-group'}>
                <Input
                    key={index}
                    name={input.name}
                    type={input.type}
                    id={input.name}
                    classInput={( (! input.valid) && (input.isValid) ) ? 'form-control contact__form__input danger ' : 'form-control contact__form__input'}
                    change={(event)=> this.onChangeInputValueHandler(event,index )}
                    click={(event)=> this.onChangeInputValueHandler(event,index)}>
                </Input>

                <Label key={index+'label'}
                       classLabel={(input.valid) ? 'contact__form__input_label contact__form__input_label_focused' : 'contact__form__input_label '}
                       click={(event)=> this.onLabelInputClickHandler(event, index)}>
                    {input.label}
                </Label>

                { ((! input.valid) && (input.isValid)) ?  <span className={'error-message'}> {this.state.errorMessage}</span> : '' }
            </div>
        ),
            checbkox = this.state.checkboxs.map((checkbox,index) =>
                <div className={( (checkbox.value === 0) && (checkbox.isValid) ) ? 'form-check error-form-check' : 'form-check'} key={index+'form-check'}>
                    <Label key={index+'label'} forLabel={checkbox.name} classLabel={'form-check-label contact__form__checkbox_label'}>{checkbox.label}</Label>
                        <span className={'link-more'} onClick={(event)=> this.showAgreements(event, index)}> [ {checkbox.textTitle} ] </span>
                        <span key={index + 'agreements'} className={ checkbox.visibleText === 'none' ? 'text-more-hidden' : 'text-more'}>
                            {checkbox.text}
                        </span>
                    <Input
                        key={index}
                        name={checkbox.name}
                        type={checkbox.type}
                        id={checkbox.name}
                        change={(event)=> this.onChangeCheckboxHandler(event, index)}
                        classInput='form-check-input' >
                    </Input>

                    <span className={( (checkbox.value === 0) && (checkbox.isValid) ) ? 'checkbox-error' : 'contact__form__check_wrapper__fake_checkbox'} key={index+'span'}> </span>
                </div>
        );

        return(
            <div>
                <section className="col-md-12 contact">
                    <ContactTitle subtitle={this.state.subtitle}>
                        Poznaj szczegóły oferty dla Ciebie <br />Już nawet w 10 minut !
                    </ContactTitle>

                    <form action="#" className="contact__form" onSubmit={(event)=> this.checkValidate(event)}>
                        {input}
                        <div className="contact__form__check_wrapper">
                            {checbkox}
                        </div>
                        <Button >WYŚLIJ</Button>
                    </form>

                </section>
            </div>
        )
    }
}

export default Contact;