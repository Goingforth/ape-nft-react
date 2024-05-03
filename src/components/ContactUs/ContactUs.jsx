import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import style from "../../page.module.css";
import { discordIcon, metalMask } from "../../image/icon";
import { useForm } from "react-hook-form";
import IconSharp from "../IconSharp/IconSharp";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  return (
    <section id='mint' className={styles.container}>
      <div className={classNames(styles.title, style.titleComponent)}>
        Are you in?
      </div>
      <div className={styles.iconX}>
        <IconSharp />
      </div>
      <div className={styles.textJoin}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));

          reset();
        })}
        className={styles.form}
      >
        <div className={styles.formItem}>
          <div className={styles.wrapperIcon}>
            <img src={discordIcon} alt='discord' width={24} height={24} />
          </div>

          <input
            {...register("userName", {
              required: "Discord required",
              pattern: { value: /^@[A-Za-z]+/, message: "Wrong discord" },
            })}
            placeholder='@username'
            autoComplete='off'
            className={
              isValid
                ? classNames(styles.formInput, styles.borderIsValid)
                : errors?.userName
                ? classNames(styles.formInput, styles.borderError)
                : styles.formInput
            }
          />
        </div>
        <div className={styles.errorsMessage}>
          {errors?.userName && <p>{errors.userName.message}</p>}
        </div>
        <div className={styles.formItem}>
          <div className={styles.wrapperIcon}>
            <img src={metalMask} alt='metalMask' width={24} height={24} />
          </div>
          <input
            {...register("address", {
              required: "Address required",
              pattern: {
                value: /^1X[A-Za-z0-9\S]{8}$/,
                message: "Wrong address",
              },
              minLength: {
                value: 10,
                message: "Min length 10 symbol",
              },
            })}
            placeholder='Wallet address'
            autoComplete='off'
            className={
              isValid
                ? classNames(styles.formInput, styles.borderIsValid)
                : errors?.address
                ? classNames(styles.formInput, styles.borderError)
                : styles.formInput
            }
          />
        </div>
        <div className={styles.errorsMessage}>
          {errors?.address && <p>{errors.address.message}</p>}
        </div>
        <button
          type='submit'
          disabled={!isValid}
          className={styles.buttonSubmit}
        >
          {Object.keys(errors).length !== 0
            ? "ERROR"
            : isValid
            ? "MINTED"
            : "MINT"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
