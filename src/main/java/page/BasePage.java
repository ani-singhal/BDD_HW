package page;

import java.util.Random;

public class BasePage {
	
	public int randomgen(int i) {
		Random ran=new Random();
		int generator=ran.nextInt(i);
		return generator;
		
	}

}
