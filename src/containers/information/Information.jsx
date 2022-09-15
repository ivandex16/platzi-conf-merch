import React, { useRef, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Container,
  InformationButtons,
  InformationSidebar,
  Back,
  InformationItem,
  H4,
  H2,
  H3,
  Input,
  Button,
  InformationElements,
  Anchor,
} from "./styles";
import ValidationTextFields from "../../component/TextField";
const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const form = useRef(null);

  const { cart } = state;

  const onSubmit = (data) => {
   console.log(data)
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }

    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  return (
    <Container>
      <div>
        <header>
          <H2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Información de contacto:
          </H2>
        </header>
        <section>
          <form ref={form}>

           


            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Nombre completo"
              name="name"
              {...register("name")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Correo Electronico"
              name="email"
              {...register("email")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Direccion"
              name="address"
              {...register("address")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Apto"
              name="apto"
              {...register("apto")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Ciudad"
              name="city"
              {...register("city")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Pais"
              name="country"
              {...register("country")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Estado"
              name="state"
              {...register("state")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Codigo postal"
              name="cp"
              {...register("cp")}
            />
            <Input
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              type="text"
              placeholder="Teléfono"
              name="phone"
              {...register("phone")}
            />
          </form>
        </section>
        <InformationButtons>
          <Anchor to={"/checkout"}>Regresar</Anchor>
          <div>
            <Button type="button" onClick={handleSubmit(onSubmit)}>Pagar</Button>
          </div>
        </InformationButtons>
      </div>

      <InformationSidebar>
        <H3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Pedido
        </H3>

        {cart.map((item, index) => (
          <InformationItem key={index}>
            <InformationElements>
              <H4 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {item.title}
              </H4>
              <span>${item.price}</span>
            </InformationElements>
          </InformationItem>
        ))}
      </InformationSidebar>
    </Container>
  );
};

export default Information;
