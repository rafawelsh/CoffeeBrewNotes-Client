import styled, { css } from "styled-components";
import { colors, device } from "./MediaQueries";
import FilteredPropsInputField from "../components/CoffeeForm/FilteredPropsInputField";
import { Field } from "formik";

export const SharedFormContainer = css`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
`;

export const AccountFormContainer = styled.div`
	${SharedFormContainer}

	@media ${device.tablet} {
		max-width: 800px;
		padding: 0rem 3rem;
	}
`;
export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const RecipeFormContainer = styled.div`
	${SharedFormContainer};

	@media ${device.tablet} {
		min-height: 600px;
		height: 100%;
	}
`;

export const FormWrapper = styled.div`
	background: ${colors.divBackground};
	/* height: fit-content; */
	border-radius: 1rem;
	padding: 1rem 0.5rem;
	margin: 0.5rem 0rem 2rem;

	@media ${device.tablet} {
		max-width: 1000px;
		width: 100%;
	}
`;

export const FormSections = styled.div`
	margin: 0.5rem 1rem;
	@media ${device.tablet} {
		display: flex;
		flex: row;
	}
`;

export const FormSection = styled.div`
	width: 100%;
	padding: 0rem 1rem;
`;

export const SharedFormStyles = css`
	width: 100%;
	background-color: #eee;
	color: ${colors.textColor};
	height: 2rem;
	border-radius: 5px;
	border: 1px solid #ddd;
	margin: 0.75rem 0rem 1rem;
	padding: 1rem 1.25rem;
	box-sizing: border-box;
`;

export const Label = styled.label`
	color: ${colors.textColor};
	font-size: 1rem;
`;

export const Input = styled(FilteredPropsInputField)`
	${SharedFormStyles}
`;

export const Select = styled(Field)`
	${SharedFormStyles}
	padding: 0rem 1.5rem;
`;

export const TextArea = styled(FilteredPropsInputField)`
	${SharedFormStyles}
	resize: none;
	height: 100px;
	width: 100%;
`;

export const Steps = styled.div`
	display: flex;
	align-items: center;
`;

export const Button = styled.button`
	background: ${colors.highlight};
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export const AddStepButton = styled(Button)`
	padding: 0.5rem;
	margin: 1rem 0 1.25rem 0;
`;
