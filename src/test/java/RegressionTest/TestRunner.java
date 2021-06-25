package RegressionTest;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;

import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.Test;

public class TestRunner {

        @Karate.Test
        void testParallel() {
            Results results = Runner.path("classpath:RegressionTest").tags("@RegressionTest").parallel(50);
            assertEquals(0, results.getFailCount(), results.getErrorMessages());
        }

}
